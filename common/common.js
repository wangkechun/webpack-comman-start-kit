'use strict'
console.log('[APP] load vendor.js ' + process.env.NODE_ENV)
console.time && console.time('[APP] app load time')
var COMMON_MODULES = {}

if(typeof window === 'object'){
	window.COMMON_MODULES = COMMON_MODULES
}

COMMON_MODULES['wolfy87-eventemitter'] = require('wolfy87-eventemitter')
COMMON_MODULES['babel-polyfill'] = require('babel-polyfill')
COMMON_MODULES['isomorphic-fetch'] = require('isomorphic-fetch')
COMMON_MODULES['react'] = require('react')
COMMON_MODULES['react-dom'] = require('react-dom')
COMMON_MODULES['redux'] = require('redux')
COMMON_MODULES['react-redux'] = require('react-redux')
COMMON_MODULES['redux-thunk'] = require('redux-thunk')
COMMON_MODULES['redux-localstorage'] = require('redux-localstorage')
COMMON_MODULES['react-router'] = require('react-router')
COMMON_MODULES['react-router-redux'] = require('react-router-redux')
COMMON_MODULES['lodash'] = require('lodash/core')
COMMON_MODULES['lodash/shuffle'] = require('lodash/shuffle')

COMMON_MODULES['tcomb-react'] = require('tcomb-react')

if(process.env.NODE_ENV === 'development'){
	COMMON_MODULES['url'] = require('url')
	COMMON_MODULES['sockjs-client'] = require('sockjs-client')
	COMMON_MODULES['strip-ansi'] = require('strip-ansi')
}


COMMON_MODULES.require = function(module){
	if(COMMON_MODULES.hasOwnProperty(module)){
		return COMMON_MODULES[module]
	}
	throw (new Error('Error module not find:'+ module))
}

module.exports = COMMON_MODULES
