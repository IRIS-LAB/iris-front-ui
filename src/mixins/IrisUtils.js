/**
 * @mixin
 */
export const IrisUtils = {
  methods: {
    _isEmpty(value) {
      return value == null || value == undefined || value === ''
    },
    _firstNotEmpty(...strs) {
      for (const str of strs) {
        if (!this._isEmpty(str)) {
          return str
        }
      }
      return null
    }
  }
}
