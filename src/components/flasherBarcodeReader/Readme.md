iris-flasher-barcode-reader example:

```vue
<iris-flasher-barcode-reader 
  :onScanOption="{
    stopPropagation: true,
    timeBeforeScanTest: 10,
    scanButtonLongPressTime: 10000,
    scanButtonKeyCode: true
  }"
  @scanResult="(sScanned) => console.log(sScanned)" 
  @scanButtonLongPress="() => console.error('too long')" 
  @scanError="(err) => console.error(err)"
></iris-flasher-barcode-reader>
```
