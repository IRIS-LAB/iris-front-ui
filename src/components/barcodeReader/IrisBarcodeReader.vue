<template>
  <div class="d-flex justify-space-between ma-3">
    <flasher-barcode-reader v-if="activeFlasher"
      :onScanOption="onScanOption"
      @scanResult="capture"
      @scanButtonLongPress="captureKey"
      @scanError="captureError"
    ></flasher-barcode-reader>
    <v-text-field :value="barcodeDecrypt" disabled></v-text-field>
    <v-btn icon color="blue" @click="dialog = true" v-if="activeCamera">
      <i class="el-icon-camera-solid"></i>
    </v-btn>
    <v-dialog v-model="dialog" v-if="activeCamera">
      <v-card v-if="dialog">
        <v-card-title class="headline grey lighten-2">
          {{ cameraCardTitle }}
        </v-card-title>

        <v-card-text class="d-flex justify-center">
          <camera-barcode-reader
            :quaggaOption="quaggaOption"
            @onDetected="onDetected"
            @erreurInitQuagga="erreurInitQuagga"
          ></camera-barcode-reader>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false">
            {{ closeButtonLabel }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CameraBarcodeReader from '../cameraBarcodeReader/IrisCameraBarcodeReader'
import FlasherBarcodeReader from '../flasherBarcodeReader/IrisFlasherBarcodeReader'
/**
 * ### Description
 *
 *  Barcode reader use onscan js to detect flash event and Quagga JS to detect barcode on camera
 *
 * @author Jeremy CHAUVIN
 * @version 1.0.2
 *
 * ### Properties and Methods
 */
export default {
  name: 'iris-barcode-reader',
  components: {
    CameraBarcodeReader,
    FlasherBarcodeReader
  },
  props: {
    /**
     * close button label
     */
    closeButtonLabel: {
      type: String,
      default: 'Close'
    },
    /**
     * title of card
     */
    cameraCardTitle: {
      type: String,
      default: 'Camera'
    },
    /**
     * onScan configuration
     */
    onScanOption: {
      type: Object,
    },
    /**
     * Quagga configuration
     */
    quaggaOption: {
      type: Object,
    },
    /**
     * Use flasher
     */
    activeFlasher: {
      type: Boolean,
      default: true
    },
    /**
     * Use camera
     */
    activeCamera: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialog: false,
      barcodeDecrypt: ''
    }
  },
  methods: {
    capture(sScanned) {
      /**
       * Scan result
       *
       * @property {String} result scanned code
       */
      this.$emit('scanResult', sScanned)
      this.barcodeDecrypt = sScanned
    },
    captureKey() {
      /**
       * Scan button long press
       */
      this.$emit('scanButtonLongPress')
    },
    captureError(err) {
      /**
       * Scan error
       *
       * @property {Object} oDebug plain object with various debug data
       */
      this.$emit('scanError', err)
    },
    onDetected(data) {
      /**
       * Scan result
       *
       * @property {String} result scanned code
       */
      this.$emit('scanResult', data.codeResult.code)
      this.barcodeDecrypt = data.codeResult.code
    },
    erreurInitQuagga(err) {
      /**
       * Error event
       *
       * @property {Object} error
       */
      this.$emit('erreurInitQuagga', err)
    }
  }
}
</script>

<style></style>
