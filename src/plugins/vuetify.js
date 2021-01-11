import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetifyOptions = {
  theme: {
    error: '#b71c1c'
  }
}

export default new Vuetify(vuetifyOptions)
