import './assets/styles/main.css'
import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import Components from './components.js'
import { Dialog } from 'element-ui'

const CustomElement = wrap(Vue, Dialog)
window.customElements.define(Dialog.name, CustomElement)

Object.keys(Components).forEach(key => {
  const CustomElement = wrap(Vue, Components[key])
  window.customElements.define(Components[key].name, CustomElement)
})

export default Components
