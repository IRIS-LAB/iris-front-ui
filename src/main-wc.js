import './assets/styles/main.css'
import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import Components from './components.js'
import { Dialog, Icon } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const ElementDialog = wrap(Vue, Dialog)
window.customElements.define(Dialog.name, ElementDialog)

const ElementIcon = wrap(Vue, Icon)
window.customElements.define(Icon.name, ElementIcon)

Object.keys(Components).forEach(key => {
  const CustomElement = wrap(Vue, Components[key])
  window.customElements.define(Components[key].name, CustomElement)
})

export default Components
