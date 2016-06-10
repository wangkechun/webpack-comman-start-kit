import React from 'react'
import {connect} from 'react-redux'
import { propTypes, t } from 'tcomb-react';

import Jade from './Root.jade'
import {set } from '../actions'


export const Root = (props)=>{
	const width = Array(10)
	const height = Array(10)
	const {cnt} = props
	return Jade({cnt, width, height})
} 

Root.propTypes = propTypes({
	cnt:t.Number,
	set:t.Func,
	store:t.Any,
	history:t.Any,
})

export default connect((state, ownProps) => {
  return {
    cnt: state.globals.cnt,
  }
}, {set})(Root)

