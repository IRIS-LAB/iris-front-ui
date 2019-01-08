import './assets/styles/main.css'
import Vue from 'vue'
import Components from './components.js'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

Object.keys(Components).forEach(key => {
  Vue.component(Components[key].name, Components[key])
})
