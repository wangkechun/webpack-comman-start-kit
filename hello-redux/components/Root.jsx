import React from 'react'
import {connect} from 'react-redux'

import {
  add
} from '../actions'

const Root = (p)=>
	<div>
		<h1>{p.cnt}</h1>
		<button onClick={()=>p.add()} >add</button>
	</div>

export default connect((state, ownProps) => {
  return {
    cnt: state.globals.cnt,
  }
}, {add})(Root)