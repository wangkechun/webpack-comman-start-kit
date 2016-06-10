import React from 'react'
import {connect} from 'react-redux'
import { propTypes, t } from 'tcomb-react';

import Jade from './Root.jade'
import {add } from '../actions'

export const If = (props)=>{
	if(props.if){
		return React.Children.only(props.children)
	}
	return null
}

export const IfElse = (props)=>{
	console.assert(props.children.length === 2)
	if(props.if){
		return props.children[0]
	}
	return props.children[1]
}


export const Root = (props)=>{
	const add2 = ()=>{
		props.add()
	}
	const list = [10,20,30]
	const show = props.cnt%2?true:false
	const click = (index)=>console.log('click', index)
	return Jade(Object.assign({}, props, {add2, list, If, show, IfElse, click}))
} 

Root.propTypes = propTypes({
	cnt:t.Number,
	add:t.Func
})

export default connect((state, ownProps) => {
  return {
    cnt: state.globals.cnt,
  }
}, {add})(Root)

