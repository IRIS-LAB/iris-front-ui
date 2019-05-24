import './assets/styles/main.css'
import Vue from 'vue'
import Components from './components.js'
import { Dialog, Icon, Dropdown, DropdownMenu, DropdownItem, Tooltip } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App' // TO DELETE
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify, { VApp, VMenu, VTextField, VDatePicker } from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)

Vue.use(Vuetify, {
  components: {
    VApp,
    VMenu,
    VTextField,
    VDatePicker
  },
  theme: {
    error: '#b71c1c'
  }
})

Object.keys(Components).forEach(key => {
  Vue.component(Components[key].name, Components[key])
})

// TO DELETE

new Vue({
  render: h => h(App) // TO DELETE
}).$mount('#app') // TO DELETE

// TO DELETE
