import Vue from 'vue'
import { Dialog, Dropdown, DropdownMenu, DropdownItem, Tooltip } from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)

Vue.use(Vuetify, {
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
