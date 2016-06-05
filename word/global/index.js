'use strict'
console.log('load vendor.js ' + process.env.NODE_ENV)
require('babel-polyfill')
require('isomorphic-fetch')
window.GLOBAL = {}
GLOBAL.React = require('react')
GLOBAL.ReactDOM = require('react-dom')
GLOBAL.Redux = require('redux')
GLOBAL.ReactRedux = require('react-redux')
GLOBAL.ReactRouter = require('react-router')

GLOBAL.ReactRouterRedux = require('react-router-redux')

GLOBAL.d = GLOBAL.debug = console.log.bind(console)
GLOBAL._ = require('lodash')
GLOBAL.TcombReact = require('tcomb-react')

GLOBAL.ReactMontion = require('react-motion')
GLOBAL.Wilddog = require('wilddog')
GLOBAL.WildReact = require('wildreact')

window = Object.assign(window, GLOBAL)