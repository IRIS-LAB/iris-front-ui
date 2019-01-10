const path = require('path')

module.exports = {
  // set your styleguidist configuration here
  title: 'Iris Front UI',
  defaultExample: false,
  exampleMode: 'expand',
  pagePerSection: true,
  usageMode: 'expand',
  components: 'src/components/**/[A-Z]*.vue',
  require: [path.join(__dirname, 'styleguide/global.requires.js')],
  sections: [
    {
      name: 'First Section',
      components: 'src/components/**/[A-Z]*.vue'
    }
  ]
}
