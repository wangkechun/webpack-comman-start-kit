import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'

import api from '../middleware/api'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, api),
      persistState(['globals']),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
    window.STORE = store
  }

  return store
}