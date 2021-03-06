var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');
var candelaPlugins = require('candela/webpack');

var loaders = require('./loaders');

module.exports = candelaPlugins({
  devtool: 'cheap-module-source-eval',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve('build'),
    filename: 'index.js'
  },
  module: {
    rules: loaders
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.template.ejs',
      title: 'Mousebrain',
      chunks: [
        'index'
      ]
    })
  ]
});
