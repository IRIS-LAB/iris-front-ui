// styleguide/global.requires.js
import Vue from 'vue'
import { Dialog, Dropdown, DropdownMenu, DropdownItem, Tooltip } from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)

Vue.mixin({
  data: function() {
    return {
      PACKAGE_JSON: require('../package.json'),
      APPLICATION_JSON: require('../static/example-application-information.json')
    }
  }
})
