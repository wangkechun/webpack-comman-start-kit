'use strict'

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

if (process.env.NODE_ENV != 'production' && process.env.NODE_ENV != 'development') {
  throw (new Error('Error process.env.NODE_ENV'))
}

let DEVELOPMENT = process.env.NODE_ENV === 'development'

var webpack = require('webpack')
var path = require('path')

var loaders = ['babel']
var port = process.env.PORT || 3000

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]


var entry = {
  './common': './common',
}

var output
var devtool

if(DEVELOPMENT){
  devtool = 'source-map'
  output = {
    filename: '[name].debug.js',
    publicPath: '/',
    path: __dirname + '/',
  }
} else {
  devtool = 'source-map'
  output = {
    filename: '[name].min.js',
    publicPath: '/',
    path: __dirname + '/',
  }
  plugins = plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress:{warnings:false}
    }),
  ])
}

var config = {
  devtool: devtool,
  entry: entry,
  output: output,
  module: {
    loaders: [],
    noParse: [],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {}
  },
  plugins: plugins,
}


module.exports = config