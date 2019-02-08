import { mount } from '@vue/test-utils'
import IrisAvatar from '@/components/user/IrisAvatar'

describe('IrisAvatar.vue', () => {
  let wrapper
  let props
  const username = 'Homer Simpson'
  const initials = 'SU'
  const src = 'https://www.clipartmax.com/'
  const backgroundColor = 'green'
  const color = 'white'
  const size = 100
  const rounded = true

  beforeEach(() => {
    // create a new instance before each test
    wrapper = mount(IrisAvatar)
    props = wrapper.vm.$options.props
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should have the correct default props', () => {
    expect(wrapper.vm.username).toBe('')
    expect(wrapper.vm.size).toBe(50)
    expect(wrapper.vm.rounded).toBe(true)
  })

  it('should have the correct props', () => {
    wrapper.setProps({ username, initials, src, backgroundColor, color, size, rounded })
    expect(wrapper.vm.username).toBe('Homer Simpson')
    expect(wrapper.vm.initials).toBe('SU')
    expect(wrapper.vm.src).toBe('https://www.clipartmax.com/')
    expect(wrapper.vm.backgroundColor).toBe('green')
    expect(wrapper.vm.color).toBe('white')
    expect(wrapper.vm.size).toBe(100)
    expect(wrapper.vm.rounded).toBe(true)
  })

  it('should have the correct required value', () => {
    expect(props.username.required).toBeFalsy()
    expect(props.initials.required).toBeFalsy()
    expect(props.src.required).toBeFalsy()
    expect(props.backgroundColor.required).toBeFalsy()
    expect(props.color.required).toBeFalsy()
    expect(props.size.required).toBeFalsy()
    expect(props.rounded.required).toBeFalsy()
  })

  it('should have the correct type', () => {
    expect(props.username.type).toBe(String)
    expect(props.initials.type).toBe(String)
    expect(props.src.type).toBe(String)
    expect(props.backgroundColor.type).toBe(String)
    expect(props.color.type).toBe(String)
    expect(props.size.type).toBe(Number)
    expect(props.rounded.type).toBe(Boolean)
  })
})
