<template>
  <div ref="vdpicker" @click="updatePickerNudge()">
    <v-menu
      v-model="displayMenu"
      :disabled="disabled"
      :close-on-content-click="false"
      :nudge-right="nudgeRight"
      :nudge-top="nudgeTop"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      max-width="290px"
      min-width="290px"
      :close-on-click="false"
    >
      <v-text-field
        ref="dptextfield"
        slot="activator"
        :label="label"
        :value="dateAsTextFieldFormat"
        :placeholder="placeholderDateAsTextFieldFormat"
        :disabled="disabled"
        :hint="textFieldDateFormat"
        persistent-hint
        prepend-inner-icon="event"
        :rules="rules"
        @blur="setDateFromTextFieldFormat"
        :clearable="clearable"
        @click:clear="clearDate"
        @keypress="checkChar"
        @input="setDateFromTextFieldFormatInput"
        :validate-on-blur="validateOnBlur"
        :error-messages="errorMessages"
        @keyup.enter="updatePickerNudge()"
      ></v-text-field>
      <v-date-picker
        :value="dateAsPickerDateFormat"
        no-title
        @input="setDateFromDatePicker"
        :locale="locale"
        v-if="!disabled"
        :first-day-of-week="firstDayOfWeek"
        :type="type"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
import moment from 'moment'

/**
 * ### Description
 *
 * Date picker component built using Vuetify allowing both picker selection and text input.
 * Only figure or character(s) contained in date format (textFieldDateFormat) are taken into account when filling date from intput text.
 * Ex: if date format is DD/MM/YY, valid characters will be '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' or '/'.
 *
 * @author Damien Ridereau
 * @version 0.1.0
 *
 * ### Properties and Methods
 */
export default {
  name: 'iris-date-picker',

  props: {
    /**
     * Label of the field
     */
    label: { type: String, required: false },
    /**
     * Date of the field. Input format: YYYY-MM-DD as string
     */
    dateData: { type: String, required: false },
    /**
     * Format of the text field date
     */
    textFieldDateFormat: { type: String, required: false, default: 'DD/MM/YYYY' },
    /**
     * Placeholder when no date is selected. The expected format is YYYY-MM-DD as string
     */
    placeholderDate: { type: String, required: false },
    /**
     * Initialize picker date value to a given date instead of today date. The expected format is YYYY-MM-DD as string
     */
    pickerDateInit: { type: String, required: false },
    /**
     * Locale for picker display format. Supported locales are:
     * <ul>
     * <li><b>en</b>: English</li>
     * <li><b>fr</b>: French</li>
     * </ul>
     *
     */
    locale: { type: String, required: false, default: 'fr' },
    /**
     * Boolean alowing activation/deactivation of the component (grayed out and not selectable).<br>
     * <ul>
     * <li><b>true</b>: component is deactivated</li>
     * <li><b>false</b>: component is activated and selectable/editable</li>
     * </ul>
     */
    disabled: { type: Boolean, required: false, default: false },
    /**
     * Vuetify rules for input validation. The input has to be an array.
     */
    rules: {
      type: Array,
      required: false,
      default: () => []
    },
    /**
     * Whether the user will be able to clear the value of the field.<br>
     * <ul>
     * <li><b>true</b>: component is clearable</li>
     * <li><b>false</b>: component is NOT clearable</li>
     * </ul>
     *
     */
    clearable: { type: Boolean, default: true, required: false },
    /**
     * Allows to postpone rules validations when text field looses focus.
     * <ul>
     * <li><b>true</b>: rules are checked only when text field looses focus</li>
     * <li><b>false</b>: rules are checked in realtime</li>
     * </ul>
     */
    validateOnBlur: { type: Boolean, default: false, required: false },
    /**
     * Sets the first day of the week, starting with 0 for sunday (1 for monday).
     */
    firstDayOfWeek: { type: [String, Number], default: 1, required: false },
    /**
     * Determines the type of the picker - date for date picker, month for month picker.
     */
    type: { type: String, default: 'date', required: false },
    /**
     * Determines the format of the picker.
     */
    format: { type: String, default: 'YYYY-MM-DD', required: false }
  },
  data: () => ({
    pickerDate: undefined,
    syncedPickerDate: undefined,
    displayMenu: false,
    alowedChars: [],
    errorMessages: [],
    nudgeRight: 0,
    nudgeTop: 0,
    isPickerOpened: false,
    labels: {
      en: {
        invalidDate: 'Invalid date'
      },
      fr: {
        invalidDate: 'Date invalide'
      }
    }
  }),
  created() {
    // Remove all letters (DD, MM, YYYY, ...) fo the string, then convert it to a Set to remove all duplicated characters and finaly store it into an array.
    this.alowedChars = Array.from(
      new Set(this.textFieldDateFormat.replace(/[A-Za-z]/g, '').split(''))
    )
    document.addEventListener('click', this.handleClick)
  },
  computed: {
    dateAsPickerDateFormat() {
      if (this.syncedPickerDate)
        // syncedPickerDate exists => currently filling date from intput text
        return this.fromMomentToString(this.syncedPickerDate, this.format, false)

      let date = this.fromMomentToString(this.pickerDate)
      // Return date if it exists or placeholder
      if (date) return date
      else if (this.placeholderDate)
        return this.fromMomentToString(this.fromStringToMoment(this.placeholderDate, this.format))
      else if (this.pickerDateInit)
        return this.fromMomentToString(this.fromStringToMoment(this.pickerDateInit, this.format))
      else return null
    },
    dateAsTextFieldFormat() {
      if (this.syncedPickerDate)
        return this.fromMomentToString(this.syncedPickerDate, this.textFieldDateFormat, false)

      return this.fromMomentToString(this.pickerDate, this.textFieldDateFormat)
    },
    placeholderDateAsTextFieldFormat() {
      return this.fromMomentToString(
        this.fromStringToMoment(this.placeholderDate, this.format),
        this.textFieldDateFormat
      )
    }
  },
  methods: {
    setDateFromDatePicker(val) {
      this.displayMenu = false
      this.isPickerOpened = false
      if (!val) return

      this.errorMessages = []

      this.pickerDate = this.fromStringToMoment(val, this.format)
      this.emitInput(this.fromMomentToString(this.pickerDate))

      this.$refs.dptextfield.focus()
    },
    setDateFromTextFieldFormat(event) {
      const val = event.target.value

      if (!val) return
      if (this.fromStringToMoment(val)) {
        this.pickerDate = this.fromStringToMoment(val)
        this.syncedPickerDate = null
        this.emitInput(this.fromMomentToString(this.pickerDate))
      } else {
        this.errorMessages.push(this.getLabel('invalidDate'))
      }
    },
    setDateFromTextFieldFormatInput(val) {
      if (!val) {
        this.errorMessages = []
        return
      }

      if (this.fromStringToMoment(val)) {
        this.syncedPickerDate = this.fromStringToMoment(val)
        this.errorMessages = []
      }
    },
    clearDate() {
      this.pickerDate = null
      this.emitInput(null)
      this.isPickerOpened = false
      this.displayMenu = false
    },
    checkChar(evt) {
      if (evt.key === 'Enter') {
        this.displayMenu = !this.displayMenu
        const textFieldVal = this.$refs.dptextfield.internalValue
        if (textFieldVal === '' || this.fromStringToMoment(textFieldVal)) {
          // input date is valid
          this.pickerDate = this.fromStringToMoment(textFieldVal)
          this.syncedPickerDate = null
          this.errorMessages = []
          this.emitInput(this.fromMomentToString(this.pickerDate))
        } else {
          // Input date is invalid
          this.errorMessages.push(this.getLabel('invalidDate'))
        }

        return
      }
      if (/[0-9]/.test(evt.key)) return

      let isValidInput = false
      this.alowedChars.forEach(char => {
        if (evt.key === char) isValidInput = true
      })
      if (!isValidInput) evt.preventDefault()
    },
    /**
     * Emits input event when current date has been modified either from text Field or date picker.
     * It contains the new date value with format YYYY-MM-DD.
     * If user clicked clear button, null value is emitted.
     *
     * @event input
     * @type {Event}
     */
    emitInput(val) {
      this.$emit('input', val)
    },
    /**
     * Convert a moment date to a formatted string date
     *
     * @param date Moment date
     * @param format expected output format. Default is YYYY-MM-DD
     * @param performDateValidation perform date validation before conversion. Default true
     * @return string date or null if date is null
     */
    fromMomentToString(date, format = this.format, performDateValidation = true) {
      if (date == null) return null

      if (performDateValidation && date.isValid()) {
        return date.format(format)
      } else if (!performDateValidation) {
        return date.format(format)
      } else {
        return null
      }
    },
    /**
     * Convert a formatted string date to a moment date
     *
     * @param sDate formatted string date
     * @param format string date format. Default is <b>textFieldDateFormat</b>
     * @param performDateValidation perform date validation before conversion. Default true
     * @return moment date or null if sDate is null
     */
    fromStringToMoment(sDate, format = this.textFieldDateFormat, performDateValidation = true) {
      if (sDate == null) return null

      if (performDateValidation && moment(sDate, format, true).isValid()) {
        return moment(sDate, format)
      } else if (!performDateValidation) {
        return moment(sDate, format)
      } else {
        return null
      }
    },
    /**
     * Update nudge variables in case date picker is in page bottom
     */
    updatePickerNudge() {
      const rightSpace = window.innerWidth - this.$refs.vdpicker.getBoundingClientRect().right
      const bottomSpace = window.innerHeight - this.$refs.vdpicker.getBoundingClientRect().bottom

      if (bottomSpace < 280) {
        // Not enough space to display picker below
        this.nudgeRight = this.$refs.vdpicker.getBoundingClientRect().width
        if (rightSpace < 290) {
          // Not enough space to display on right
          this.nudgeRight = -290
        }
      }
    },
    getLabel(key) {
      return this.labels[this.locale][key]
    },
    handleClick(evt) {
      evt.stopPropagation()
      if (this.$refs.vdpicker) {
        if (!this.$refs.vdpicker.contains(evt.target)) {
          this.displayMenu = false
          this.isPickerOpened = false
        } else if (this.$refs.vdpicker.contains(evt.target) && !this.isPickerOpened) {
          this.displayMenu = true
          this.isPickerOpened = true
        } else if (this.$refs.vdpicker.contains(evt.target) && this.isPickerOpened) {
          this.displayMenu = false
          this.isPickerOpened = false
        }
      }
    }
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClick)
  },
  watch: {
    dateData: {
      immediate: true,
      handler(value) {
        this.pickerDate = value ? moment(value, this.format) : null
      }
    }
  }
}
</script>

<docs>
### Examples

#### SIMPLE DATE PICKER
```vue
<iris-date-picker></iris-date-picker>
```

#### DATE PICKER PLACEHOLDER
```vue
<iris-date-picker placeholder-date="2019-04-12"></iris-date-picker>
```

#### DATE PICKER FED WITH INTITIAL VALUE AND FORMAT
```vue
<iris-date-picker label="Date Picker Label" date-data="2019-05-12" :disabled="false" text-field-date-format="DD.MM.YY"></iris-date-picker>
```

#### DATE PICKER RULES
```vue
<iris-date-picker label="Date Picker Label" date-data="2019-05-12" :disabled="false" text-field-date-format="DD.MM.YY" :rules="[value => !!value || 'Mandatory']"></iris-date-picker>
```

#### DATE PICKER RULES VALIDATION WHEN FOCUCED LOST
```vue
<iris-date-picker label="Date Picker Label" date-data="2019-05-12" :disabled="false" text-field-date-format="DD.MM.YY" :rules="[value => !!value || 'Mandatory']" validate-on-blur></iris-date-picker>
```
</docs>
