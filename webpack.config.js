var path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const outPath = path.resolve(__dirname, './dist')
module.exports = {
  entry: './src/index.js',
  output: {
    path: outPath,
    publicPath: '/dist/',
    filename: 'index.js',
    library:'vue-js-toggle-button',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 Sass 编译成 CSS
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    vue: 'vue'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.global.prod.js'
    }
  },
  performance: {
    hints: false
  },
  devtool: '#source-map',
  plugins: [
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
}
