const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const primayColor = '#303A3C'
const secondaryColor = '#F5821F'
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'public')
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  'font-family': 'Open Sans',
                  'primary-color': primayColor,
                  'layout-header-background': secondaryColor
                },
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'file-loader',
        options: {
          name: './static/media/[name].[hash].[ext]',
          outputPath: 'icon'
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/i,
        loader: 'file-loader',
        options: {
          name: './static/media/[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      favicon: './public/favicon.ico',
      inject: true
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '' },
        { from: 'public/offline.html', to: '' },
        { from: 'public/serviceworker.js', to: '' },
        { from: 'public/img', to: '/img' }
      ]
    })
  ]
}
