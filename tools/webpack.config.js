'use strict'

process.env.NODE_ENV = process.env.NODE_ENV || 'production'

if (process.env.NODE_ENV != 'production' && process.env.NODE_ENV != 'development') {
  throw (new Error('Error process.env.NODE_ENV'))
}

var DEBUG = process.env.NODE_ENV === 'development' ? true : false

var webpack = require('webpack')
var path = require('path')

var loaders = ['babel']
var port = process.env.PORT || 3000

var devtool
var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]
var entry = {
  'hello/app': './hello/index.jsx',
  'hello-redux/app': './hello-redux/index.jsx',
  'word/app': './word/index.jsx',
}

var filename = null


if (DEBUG) {
  devtool = 'eval-source-map'
  loaders = ['react-hot'].concat(loaders)
  plugins = plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
  entry = Object.keys(entry).reduce(function (result, key) {
    result[key] = [
      'webpack-dev-server/client?http://0.0.0.0:' + port,
      'webpack/hot/only-dev-server',
      entry[key]
    ]
    return result
  }, {})
  filename = '[name].debug.js'
} else {
  devtool = 'source-map'
  plugins = plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress:{warnings:false}
    }),
  ])
  filename = '[name].min.js'
}

var COMMON_MODULES = require('../common/common.js')

var config = {
  devtool: devtool,
  entry: entry,
  output: {
    filename: filename,
    publicPath: '/',
    path: __dirname + '/../',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /build|lib|bower_components|node_modules/,
      loaders: loaders
    }, {
      test: /\.less$/,
      loaders: ['style', 'css?-url', 'less']
    }, {
      test: /\.jade$/,
      loaders: ['wkc-react-jade']
    }],
    noParse: [
      path.join(__dirname, '..', 'node_modules', 'babel-core', 'browser.min.js'),
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {}, 
  },
  plugins: plugins,
  externals:[
    function(context, request, callback){
      if(COMMON_MODULES.hasOwnProperty(request)){
        callback(null, `COMMON_MODULES.require("${request}")`)
      }else{
        // console.log(`module not in COMMON_MODULES: ${request} ${context}`)
        callback()
      }
    }
  ]
}

// console.log(JSON.stringify(config, null, '  '))
module.exports = config