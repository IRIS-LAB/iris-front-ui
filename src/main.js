import './assets/styles/main.css'
import Vue from 'vue'
import Components from './components.js'
import { Dialog, Icon, Dropdown, DropdownMenu, DropdownItem, Tooltip } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)

Object.keys(Components).forEach(key => {
  Vue.component(Components[key].name, Components[key])
})
