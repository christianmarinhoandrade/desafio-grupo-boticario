const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
                  'primary-color': '#303A3C',
                  'layout-header-background': '##F5821F'
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
    new CleanWebpackPlugin()
  ]
}
