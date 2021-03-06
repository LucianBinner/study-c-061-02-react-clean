const path = require('path')
const { DefinePlugin } = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }, {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
    historyApiFallback: true
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://localhost:5050/api')
    }),
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'template.dev.html')
    })
  ]
})
