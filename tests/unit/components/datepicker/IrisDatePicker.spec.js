import moment from 'moment'
import { mount } from '@vue/test-utils'
import IrisDatePicker from '@/components/datepicker/IrisDatePicker'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

describe('IrisDatePicker.vue', () => {
  let wrapper
  let props

  beforeEach(() => {
    wrapper = mount(IrisDatePicker)
    props = wrapper.vm.$options.props

    // To resolve '[Vuetify] Unable to locate target [data-app]' with Vuetify
    const app = document.createElement('div')
    app.setAttribute('data-app', true)
    document.body.appendChild(app)
  })

  describe('Component', () => {
    it('components are Vue instances', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('is a IrisDatePicker component', () => {
      expect(wrapper.is(IrisDatePicker)).toBe(true)
    })
  })

  describe('Properties', () => {
    beforeEach(() => {
      props = wrapper.vm.$options.props
    })

    it('should have the correct default props', () => {
      expect(wrapper.vm.textFieldDateFormat).toBe('DD/MM/YYYY')
      expect(wrapper.vm.locale).toBe('fr')
      expect(wrapper.vm.disabled).toBe(false)
      expect(wrapper.vm.rules).toEqual([])
      expect(wrapper.vm.clearable).toBe(true)
      expect(wrapper.vm.validateOnBlur).toBe(false)
      expect(wrapper.vm.firstDayOfWeek).toBe(1)
      expect(wrapper.vm.type).toBe('date')
      expect(wrapper.vm.format).toBe('YYYY-MM-DD')
    })

    it('should have the correct overloaded props', () => {
      wrapper.setProps({
        label: 'label',
        dateData: '2019-04-12',
        textFieldDateFormat: 'DD.MM.YYYY',
        placeholderDate: '2019-04-12',
        locale: 'en',
        disabled: true,
        rules: [true, false],
        clearable: false,
        validateOnBlur: true,
        pickerDateInit: '2019-12-21',
        firstDayOfWeek: 0,
        type: 'month',
        format: 'YYYY-MM'
      })

      expect(wrapper.vm.label).toBe('label')
      expect(wrapper.vm.dateData).toBe('2019-04-12')
      expect(wrapper.vm.textFieldDateFormat).toBe('DD.MM.YYYY')
      expect(wrapper.vm.placeholderDate).toBe('2019-04-12')
      expect(wrapper.vm.locale).toBe('en')
      expect(wrapper.vm.disabled).toBe(true)
      expect(wrapper.vm.rules).toEqual([true, false])
      expect(wrapper.vm.clearable).toBe(false)
      expect(wrapper.vm.validateOnBlur).toBe(true)
      expect(wrapper.vm.pickerDateInit).toBe('2019-12-21')
      expect(wrapper.vm.firstDayOfWeek).toBe(0)
      expect(wrapper.vm.type).toBe('month')
      expect(wrapper.vm.format).toBe('YYYY-MM')
    })

    it('should have the correct required value', () => {
      expect(props.label.required).toBeFalsy()
      expect(props.dateData.required).toBeFalsy()
      expect(props.textFieldDateFormat.required).toBeFalsy()
      expect(props.placeholderDate.required).toBeFalsy()
      expect(props.locale.required).toBeFalsy()
      expect(props.disabled.required).toBeFalsy()
      expect(props.rules.required).toBeFalsy()
      expect(props.clearable.required).toBeFalsy()
      expect(props.validateOnBlur.required).toBeFalsy()
      expect(props.pickerDateInit.required).toBeFalsy()
      expect(props.firstDayOfWeek.required).toBeFalsy()
      expect(props.type.required).toBeFalsy()
      expect(props.format.required).toBeFalsy()
    })

    it('should have the correct type', () => {
      expect(props.label.type).toBe(String)
      expect(props.dateData.type).toBe(String)
      expect(props.textFieldDateFormat.type).toBe(String)
      expect(props.placeholderDate.type).toBe(String)
      expect(props.locale.type).toBe(String)
      expect(props.disabled.type).toBe(Boolean)
      expect(props.rules.type).toBe(Array)
      expect(props.clearable.type).toBe(Boolean)
      expect(props.validateOnBlur.type).toBe(Boolean)
      expect(props.pickerDateInit.type).toBe(String)
      expect(props.firstDayOfWeek.type).toEqual([String, Number])
      expect(props.type.type).toBe(String)
      expect(props.format.type).toBe(String)
    })
  })

  describe('Events', () => {
    it('should call the emitInput function when click on date in date-picker', () => {
      wrapper.vm.emitInput = jest.fn()

      wrapper.find({ ref: 'dptextfield' }).trigger('click')
      setTimeout(() => wrapper.find('div.v-date-picker-table button.v-btn').trigger('click'), 50)

      setTimeout(() => expect(wrapper.vm.emitInput).toBeCalled(), 50)
    })

    it('should call the emitInput function when keyboard input on input-text', () => {
      wrapper.vm.emitInput = jest.fn()

      wrapper.vm.pickerDate = moment('2020-04-12', 'YYYY-MM-DD')
      expect(wrapper.vm.pickerDate.format('YYYY-MM-DD')).toBe(
        moment('2020-04-12', 'YYYY-MM-DD').format('YYYY-MM-DD')
      )

      wrapper.find({ ref: 'dptextfield' }).trigger('keyborad', { key: 'Enter' })

      // Wait some time before checking triggered event
      setTimeout(() => expect(wrapper.vm.emitInput).toBeCalled(), 50)
    })
  })
})
