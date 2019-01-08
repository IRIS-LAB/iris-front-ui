// styleguide/global.requires.js
import Vue from 'vue'
import ElementUI from '../node_modules/element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.mixin({
  data: function() {
    return {
      PACKAGE_JSON: require('../package.json'),
      APPLICATION_JSON: require('../static/example-application-information.json')
    }
  }
})
