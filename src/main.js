import './assets/styles/main.css'
import Vue from 'vue'
import IrisAbout from './components/about/IrisAbout'
import IrisHelloWorld from './components/helloworld/IrisHelloWorld'

const Components = {
  IrisHelloWorld,
  IrisAbout
}

Object.keys(Components).forEach(key => {
  Vue.component(Components[key].name, Components[key])
})

export default Components
