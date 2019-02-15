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
      expect(wrapper.find('#username').text()).toEqual('Homer Simpson')
    })

    it('should not have username', () => {
      expect(wrapper.vm.usernameEmpty).toBe(true)
      expect(wrapper.find('#username').exists()).toBe(false)
    })

    it('should have the logout label in french', () => {
      expect(wrapper.find('#logout').text()).toEqual(lang['fr'].logout)
    })

    it('should have the logout label in english', () => {
      const language = 'en'
      const wrapperWithProps = mount(IrisLogoutDropdown, {
        propsData: {
          language
        }
      })
      wrapperWithProps.setProps({ language })
      expect(wrapperWithProps.find('#logout').text()).toEqual(lang[language].logout)
    })

    describe('Slots', () => {
      it('Avatar slot is rendered', () => {
        const wrapperWithSlot = mount(IrisLogoutDropdown, {
          stubs: ['iris-avatar'],
          slots: {
            avatar: `<iris-avatar id="slotAvatarExample" username="Enrico Nacias"></iris-avatar>`
          }
        })
        expect(wrapperWithSlot.find('#slotAvatarExample').exists()).toBe(true)
      })

      it('Content slot is rendered withing ul.el-dropdown-menu', () => {
        const idSlotOne = 'slotContentExampleOne'
        const slotTextOne = 'Text example one'
        const idSlotTwo = 'slotContentExampleTwo'
        const slotTextTwo = 'Text example two'
        const wrapperWithSlot = mount(IrisLogoutDropdown, {
          slots: {
            content: `  <el-dropdown-item class="slot-class" id="${idSlotOne}" v-on:click.native>${slotTextOne}</el-dropdown-item>
                        <el-dropdown-item class="slot-class" id="${idSlotTwo}" v-on:click.native>${slotTextTwo}</el-dropdown-item>`
          }
        })
        const list = wrapperWithSlot.find('ul.el-dropdown-menu')
        expect(list.findAll('.slot-class').length).toBe(2)
        expect(wrapperWithSlot.find(`#${idSlotOne}`).text()).toBe(slotTextOne)
        expect(wrapperWithSlot.find(`#${idSlotTwo}`).text()).toBe(slotTextTwo)
      })
    })
  })

  describe('Events', () => {
    it('should call the logout function when click on logout', () => {
      wrapper.vm.logout = jest.fn()

      wrapper.find('#logout').trigger('click')

      expect(wrapper.vm.logout).toBeCalled()
    })

    it('should trigger a logoutEvent event when a logout method is called', () => {
      const stub = jest.fn()
      wrapper.vm.$on('logout', stub)

      wrapper.vm.logout()

      expect(wrapper.emitted('logoutEvent')).toBeTruthy()
    })
  })
})
