import '../assets/style/main.css'
import Vue from 'vue'
import HelloWorld from './components/HelloWorld'
import HelloWorld2 from './components/HelloWorld2'

const Components = {
  HelloWorld,
  HelloWorld2
}

Object.keys(Components).forEach(key => {
  Vue.component(Components[key].name, Components[key])
})

export default Components
