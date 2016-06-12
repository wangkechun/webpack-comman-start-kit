import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/Root'
import RootCss from './components/Root.less'

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

