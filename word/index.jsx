import Root from './root'
import './index.less'
import React from 'react'
import ReactDOM from 'react-dom'

console.log('[APP] app start ' + process.env.NODE_ENV)
var rootInstance = null

rootInstance = ReactDOM.render(<Root/>, document.getElementById('root'))

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}

