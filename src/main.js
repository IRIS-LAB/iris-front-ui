import './assets/styles/main.css'
import Vue from 'vue'
import Components from './components.js'
import { Dialog } from 'element-ui'

Vue.use(Dialog)

Object.keys(Components).forEach(key => {
  Vue.component(Components[key].name, Components[key])
})
