import React from 'react'
import ReactDOM from 'react-dom'
import {hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import Root from './components/Root'
import RootCss from './components/Root.less'

console.log('[APP] app start ' + process.env.NODE_ENV)
console.time && console.timeEnd('[APP] app load time')
var rootInstance = null

import configureStore from './store/configureStore'
const store = configureStore()

const history = syncHistoryWithStore(hashHistory, store)
rootInstance = ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}

