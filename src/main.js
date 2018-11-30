import './assets/styles/main.css'
import Vue from 'vue'
import IrisAbout from './components/about/IrisAbout'
import IrisHelloWorld from './components/helloworld/IrisHelloWorld'
import wrap from '@vue/web-component-wrapper'

const Components = {
  IrisHelloWorld,
  IrisAbout
}

Object.keys(Components).forEach(key => {
  const CustomElement = wrap(Vue, Components[key])
  window.customElements.define(Components[key].name, CustomElement)
  Vue.component(Components[key].name, Components[key])
})

export default Components
