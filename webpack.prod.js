var path = require('path')
var { merge } = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

var webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './static/js/[name].[chunkhash].min.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './static/css/[name].[chunkhash].css'
    })
  ],
  rules: [
    {
      test: /\.(js|jsx|ts|tsx)?$/,
      exclude: /(node_modules)/,
      include: path.resolve(__dirname, 'src'),
      loader: require.resolve('babel-loader')
    }
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
})

module.exports = webpackConfig
