iris-camera-barcode-reader example:

```vue
<iris-camera-barcode-reader 
  :quaggaOption="{
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
  @erreurInitQuagga="(err) => console.error(err)"></iris-camera-barcode-reader>
```