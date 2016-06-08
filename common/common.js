'use strict'
console.log('load vendor.js ' + process.env.NODE_ENV)

var COMMON_MODULES = {}

COMMON_MODULES['wolfy87-eventemitter'] = require('wolfy87-eventemitter')
COMMON_MODULES['babel-polyfill'] = require('babel-polyfill')
COMMON_MODULES['isomorphic-fetch'] = require('isomorphic-fetch')
COMMON_MODULES['react'] = require('react')
COMMON_MODULES['react/lib/ReactMount'] = require('react/lib/ReactMount')
COMMON_MODULES['react-dom'] = require('react-dom')
COMMON_MODULES['redux'] = require('redux')
COMMON_MODULES['react-router'] = require('react-router')
COMMON_MODULES['react-router-redux'] = require('react-router-redux')
COMMON_MODULES['lodash'] = require('lodash')
COMMON_MODULES['tcomb-react'] = require('tcomb-react')
COMMON_MODULES['react-motion'] = require('react-motion')
COMMON_MODULES['wilddog'] = require('wilddog')
COMMON_MODULES['wildreact'] = require('wildreact')
COMMON_MODULES.require = function(module){
	if(COMMON_MODULES.hasOwnProperty(module)){
		return COMMON_MODULES[module]
	}
	throw (new Error('Error module not find:'+ module))
}
if(typeof window === 'object'){
	window.COMMON_MODULES = COMMON_MODULES
}else{
	global.COMMON_MODULES = COMMON_MODULES
}

module.exports = COMMON_MODULES

