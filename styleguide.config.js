const path = require('path')
const vueLoader = require('vue-loader')

module.exports = {
  // set your styleguidist configuration here
  title: 'Iris Front UI',
  defaultExample: false,
  exampleMode: 'expand',
  pagePerSection: true,
  usageMode: 'expand',
  styleguideDir: 'docs',
  components: 'src/components/**/[A-Z]*.vue',
  require: [path.join(__dirname, 'styleguide/global.requires.js')],
  renderRootJsx: path.join(__dirname, 'styleguide/styleguide.root.js'),
  sections: [
    {
      name: 'First Section',
      components: 'src/components/**/[A-Z]*.vue'
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: ['file-loader']
        },
        {
          test: /\.s(c|a)ss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  fiber: require('fibers'),
                  indentedSyntax: true // optional
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [new vueLoader.VueLoaderPlugin()]
  }
}
