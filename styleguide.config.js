const path = require('path')

module.exports = {
  // set your styleguidist configuration here
  title: 'Iris Elements',
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
  // webpackConfig: {
  //   // custom config goes here
  // }
}
