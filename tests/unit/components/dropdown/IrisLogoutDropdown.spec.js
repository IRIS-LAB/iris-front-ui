import { mount } from '@vue/test-utils'
import IrisLogoutDropdown from '@/components/dropdown/IrisLogoutDropdown'
import Vue from 'vue'
import { Dropdown, DropdownMenu, DropdownItem, Tooltip } from 'element-ui'
import lang from '@/assets/lang/i18n.js'

Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)

describe('IrisLogoutDropdown.vue', () => {
  let wrapper
  let props

  beforeEach(() => {
    // create a new instance before each test
    wrapper = mount(IrisLogoutDropdown)
    props = wrapper.vm.$options.props
  })

  describe('Component', () => {
    it('components are Vue instances', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('is a IrisLogoutDropdown component', () => {
      expect(wrapper.is(IrisLogoutDropdown)).toBe(true)
    })
  })

  describe('Properties', () => {
    const language = 'en'
    const username = 'Homer Simpson'
    const tooltip = true
    const tooltipContent = 'Mon content'
    const arrow = false

    beforeEach(() => {
      props = wrapper.vm.$options.props
    })
    it('should have the correct default props', () => {
      expect(wrapper.vm.language).toBe('fr')
      expect(wrapper.vm.username).toBe('')
      expect(wrapper.vm.tooltip).toBe(false)
      expect(wrapper.vm.tooltipContent).toBe('')
      expect(wrapper.vm.arrow).toBe(true)
    })

    it('should have the correct overloaded props', () => {
      wrapper.setProps({ language, username, tooltip, tooltipContent, arrow })

      expect(wrapper.vm.language).toBe('en')
      expect(wrapper.vm.username).toBe('Homer Simpson')
      expect(wrapper.vm.tooltip).toBe(true)
      expect(wrapper.vm.tooltipContent).toBe('Mon content')
      expect(wrapper.vm.arrow).toBe(false)
    })

    it('should have the correct required value', () => {
      expect(props.language.required).toBeFalsy()
      expect(props.username.required).toBeFalsy()
      expect(props.tooltip.required).toBeFalsy()
      expect(props.tooltipContent.required).toBeFalsy()
      expect(props.arrow.required).toBeFalsy()
    })

    it('should have the correct type', () => {
      expect(props.language.type).toBe(String)
      expect(props.username.type).toBe(String)
      expect(props.tooltip.type).toBe(Boolean)
      expect(props.tooltipContent.type).toBe(String)
      expect(props.arrow.type).toBe(Boolean)
    })
  })

  describe('HTML content', () => {
    it('should have the correct username', () => {
      wrapper.setProps({ username: 'Homer Simpson' })
      wrapper.setData({ usernameEmpty: false })
      expect(wrapper.vm.usernameEmpty).toBe(false)
      expect(wrapper.find('#username').text()).toContain('Homer Simpson')
    })

    it('should not have username', () => {
      expect(wrapper.vm.usernameEmpty).toBe(true)
      expect(wrapper.find('#username').exists()).toBe(false)
    })

    it('should have logout in fr', () => {
      expect(wrapper.find('#logout').text()).toContain(lang['fr'].logout)
    })

    // it('should have logout in en', () => {
    //   wrapper.setProps({ language: 'en' })
    //   expect(wrapper.find('#logout').text()).toContain(lang['en'].logout)
    // })

    describe('Slots', () => {})
  })

  describe('Events', () => {
    it('should call the logout function when click on logout', () => {
      wrapper.vm.logout = jest.fn()

      wrapper.find('#logout').trigger('click')

      expect(wrapper.vm.logout).toBeCalled()
    })

    it('should trigger a logout event when a logout method is called', () => {
      const stub = jest.fn()
      wrapper.vm.$on('logout', stub)

      wrapper.vm.logout()

      expect(wrapper.emitted('logout')).toBeTruthy()
    })
  })
})
