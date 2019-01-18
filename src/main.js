import './assets/styles/main.css'
import Vue from 'vue'
import Components from './components.js'
import { Dialog, Icon, Dropdown } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Dropdown)

Object.keys(Components).forEach(key => {
  Vue.component(Components[key].name, Components[key])
})
