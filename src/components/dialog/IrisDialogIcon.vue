<template>
  <div>
    <i @click="dialogVisible = true" :class="icon"></i>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="40%">
      <slot></slot>
    </el-dialog>
  </div>
</template>
<script>
/**
 * ### Description
 *
 * Icon that display a dialog  box on click
 *
 * @author Benjamin Corré
 * @version 1.0.0
 *
 * ### Properties and Methods
 */
export default {
  name: 'iris-dialog-icon',
  props: {
    /**
     * Title of the dialog box
     */
    title: String,
    /**
     * Name of the icon of elements ui to display
     * @see http://element.eleme.io/?ref=madewithvuejs.com#/en-US/component/icon for more icons
     */
    icon: {
      type: String,
      default: 'el-icon-question'
    }
  },
  data() {
    return {
      /**
       * Dialog box is visible ?
       */
      dialogVisible: false
    }
  }
}
</script>
<style scoped>
i:hover {
  cursor: pointer;
}
</style>

<docs>
  ### Examples 

  #### Prerequisites

  ```vue 
  <iris-dialog-icon
    title="My title">
    <div>My dialog content</div>
  </iris-dialog-icon>
  ```
</docs>