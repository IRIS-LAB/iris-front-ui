<template>
  <div id="video" ref="video"></div>
</template>

<script>
import Quagga from "quagga"

/**
 * ### Description
 *
 * Camera barcode reader use the camera on device. This component use Quagga JS
 * 
 * 
 * @author Jeremy CHAUVIN
 * @version 1.0.2
 *
 * ### Properties and Methods
 */
export default {
  name: "iris-camera-barcode-reader",
  props:{
      /**
       * Configuration of quagga JS
       */
      quaggaOption: {
          type: Object,
          required: true
        },
    },
  async mounted() {
    this.quaggaOption.inputStream.target = "#video"
    await Quagga.init(
      this.quaggaOption,
      function(err) {
        if (err) {
          /**
           * Error event
           * 
           * @property {Object} error 
           */
          this.$emit('erreurInitQuagga', err)
          return
        }
        Quagga.start()
      }
    )

    Quagga.onProcessed(function(result) {
      const drawingCtx = Quagga.canvas.ctx.overlay
      const drawingCanvas = Quagga.canvas.dom.overlay

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")))
          result.boxes
            .filter(function(box) {
              return box !== result.box
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 })
            })
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 })
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(result.line, { x: "x", y: "y" }, drawingCtx, { color: "red", lineWidth: 3 })
        }
      }
    })

    Quagga.onDetected(data => {
      /**
       * On detected event
       * 
       * @property {Object} data contains result
       */
      this.$emit('onDetected', data)
    })
  },
  destroyed() {
    Quagga.stop()
  }
}
</script>

<style>

#video {
  max-width: 90%;
  display: inline-block;
  position: relative;
}

#video > canvas {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#video > canvas,
#video > video {
  max-width: 100%;
}
</style>
