import re
import base64
from urllib import request
from http.client import HTTPResponse
from pathlib import Path
from functools import lru_cache
from typing import Optional, NoReturn


class Embedder:
    _matcher = re.compile(r'(?<=xlink:href=")(https?://[^"]+)(?=")')

    def __init__(self, matcher: re.Pattern = None):
        self._matcher = matcher or self._matcher

    @staticmethod
    @lru_cache(maxsize=64)
    def _fetch_remote(url: str) -> tuple[bytes, Optional[str]]:
        print(f'Fetching {url}')
        response: HTTPResponse
        for _ in range(3):
            try:
                with request.urlopen(url, timeout=10) as response:
                    if response.status != 200:
                        raise Exception(f'{response.status} {response.reason}')
                    content_type = response.getheader('Content-Type')
                    print(f'Fetched {url} with content type {content_type}')
                    return response.read(), content_type
            except Exception as e:
                print(f'Failed to fetch {url}: {e}')
                if _ == 2:
                    raise e

    def _replacer(self, match: re.Match) -> str:
        url = match.group(1)
        data, content_type = self._fetch_remote(url)
        data = base64.b64encode(data).decode()
        content_type = content_type or 'image/png'
        return f'data:{content_type};base64,{data}'

    def embed(self, svg: str) -> str:
        return self._matcher.sub(self._replacer, svg)

    def __call__(self, source: Path, destination: Path) -> NoReturn:
        print(f'Processing {source}')
        svg = source.read_text()
        svg = self.embed(svg)
        print(f'Writing to {destination}')
        destination.write_text(svg)


def main():
    base_path = Path(__file__).parent.parent
    dist_path = base_path / 'dist'
    source_path = base_path / 'images' / 'experiments'

    dist_path.mkdir(parents=True, exist_ok=True)

    embeder = Embedder()

    with (dist_path / 'README.md').open('w') as readme:
        readme.write('# Dist\n\n')

        for file in sorted(source_path.glob('*.svg')):
            dest = dist_path / file.name
            embeder(file, dest)
            readme.write(
                f'## [{file.name}]({file.name})\n\n'
                f'[![{file.name}]({file.name})]({file.name})\n\n'
            )


if __name__ == '__main__':
    main()
