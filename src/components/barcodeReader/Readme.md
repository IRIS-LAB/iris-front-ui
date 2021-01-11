iris-barcode-reader example:

```vue
<iris-barcode-reader :quaggaOption="{
    locate: false,
    inputStream: {
      name: 'Live',
      type: 'LiveStream',
      target: '#video',
      constraints: {
        width: { min: 640 },
        height: { min: 480 }
      },
      area: {
        top: '20%',
        bottom: '20%',
        right: '10%',
        left: '10%'
      }
    },
    decoder: {
      readers: ['code_128_reader']
    }
  }"
  @onDetected="(data) => console.log(data)"
  @erreurInitQuagga="(err) => console.error(err)" 
  :onScanOption="{
    stopPropagation: true,
    timeBeforeScanTest: 10,
    scanButtonLongPressTime: 10000,
    scanButtonKeyCode: true
  }"
  @scanResult="(sScanned) => console.log(sScanned)" 
  @scanButtonLongPress="() => console.error('too long')" 
  @scanError="(err) => console.error(err)"></iris-barcode-reader>
```