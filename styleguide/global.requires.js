// styleguide/global.requires.js
import Vue from 'vue'
import { Dialog, Dropdown, DropdownMenu, DropdownItem, Tooltip } from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify, { VApp, VMenu, VTextField, VDatePicker } from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

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

Vue.mixin({
  data: function() {
    return {
      PACKAGE_JSON: require('../package.json'),
      APPLICATION_JSON: require('../static/example-application-information.json')
    }
  }
})
