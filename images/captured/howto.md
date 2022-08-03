```js
var detailsOpen = document.querySelector('details[open]')
var detailsDialog = detailsOpen.querySelector('details-dialog')
// get the current background-color of the detailsDialog (changes based on light/dark mode)
// https://stackoverflow.com/a/45061666
var detailsDialogBackgroundColor = window.getComputedStyle(detailsDialog).getPropertyValue('background-color')
// apply it to the background (the ::before is filling the screen)
// 4 -> global-608c7d1a6bd9.css
// 1736 -> `.details-overlay-dark[open] > summary::before`
// https://stackoverflow.com/a/33004385
document.styleSheets[4].cssRules[1736].style.backgroundColor = detailsDialogBackgroundColor
detailsDialog.querySelector('button')?.remove()
detailsDialog.style.borderRadius = 0
detailsDialog.style.boxShadow = 'none'
detailsDialog.querySelector('.rounded-top-2')?.classList.remove('rounded-top-2')
```

- https://firefox-source-docs.mozilla.org/devtools-user/taking_screenshots/index.html#taking-screenshots-with-the-web-console
- https://meyerweb.com/eric/thoughts/2018/08/24/firefoxs-screenshot-command-2018/
- https://blog.nightly.mozilla.org/2018/08/23/screenshots-from-the-console/

windows display scale at 125 %:

```
// :screenshot --selector 'details[open] details-dialog > div' --dpr 1.875 // use the one below
:screenshot --selector 'details[open] details-dialog > div' --dpr 2.5
```
