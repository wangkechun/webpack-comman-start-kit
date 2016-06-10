import {routerReducer} from 'react-router-redux'
import {t, props} from 'tcomb-react'
import _ from 'lodash'
import {combineReducers} from 'redux'
import * as ActionTypes from '../actions'

const routing = routerReducer

export const cnt = (state = 0, action) => {
  if(action.type === ActionTypes.NUM_SET){
    return action.value
  }
  return state
}

const globals = combineReducers({
	cnt,
})

const rootReducer = combineReducers({
  globals,
  routing,
})

export default rootReducer