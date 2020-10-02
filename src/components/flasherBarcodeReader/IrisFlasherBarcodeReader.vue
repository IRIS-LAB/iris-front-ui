<template>
  <div></div>
</template>

<script>
import onscan from "onscan.js"
/**
 * ### Description
 *
 * Flasher barcode reader use onscan js to detect flash event
 *
 * @author Jeremy CHAUVIN
 * @version 1.0.2
 *
 * ### Properties and Methods
 */
export default {
  name: "iris-flasher-barcode-reader",
  props: {
    /**
     * onScan config
     */
    onScanOption: {
      type: Object,
      required: true
    }
  },
  mounted() {
    if(!this.onScanOption.onScan) {
      this.onScanOption.onScan = this.capture
    }
    if(!this.onScanOption.onScanError) {
      this.onScanOption.onScanError = this.captureError
    }
    if(!this.onScanOption.onScanButtonLongPress) {
      this.onScanOption.onScanButtonLongPress = this.captureKey
    }
    onscan.attachTo(document, this.onScanOption)
  },
  methods: {
    capture(sScanned, iQty) {
      /**
       * Scan result
       * 
       * @property {String} sScanned scanned code
       * @property {Integer} iQty quantity
       */
      this.$emit("scanResult", sScanned, iQty)
    },
    captureKey() {
      /**
       * Scan button long press
       */
      this.$emit("scanButtonLongPress")
    },
    captureError(oDebug) {
      /**
       * Scan error
       * 
       * @property {Object} oDebug plain object with various debug data
       */
      this.$emit("scanError", oDebug)
    }
  },
  destroyed() {
    onscan.detachFrom(document)
  }
}
</script>

<style></style>
