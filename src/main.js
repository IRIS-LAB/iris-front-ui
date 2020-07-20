import './assets/styles/main.css'
import Vue from 'vue'
import Components from './components.js'
import { Dialog, Icon, Dropdown, DropdownMenu, DropdownItem, Tooltip } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import vuetify from './plugins/vuetify'

Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)

Object.keys(Components).forEach(key => {
  Vue.component(Components[key].name, { ...Components[key], vuetify })
})
