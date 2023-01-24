```js
var detailsOpen = document.querySelector('details[open]')
// TODO summary::before => background-color: white; or background-color: #0d1117;
var detailsDialog = detailsOpen.querySelector('details-dialog')
detailsDialog.querySelector('button').remove()
detailsDialog.style.borderRadius = 0
detailsDialog.style.boxShadow = 'none'
detailsDialog.querySelector('.rounded-top-2').classList.remove('rounded-top-2')
```

windows display scale at 125 %:

```
:screenshot --selector 'details[open] details-dialog > div' --dpr 1.875
:screenshot --selector 'details[open] details-dialog > div' --dpr 2.5
```