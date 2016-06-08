import React from 'react'
import {connect} from 'react-redux'

import {
  add
} from '../actions'

const Root = React.createClass({
	render(){
		return (
			<div>
				<h1>{this.props.cnt}</h1>
				<button onClick={()=>this.props.add()} >add</button>
			</div>
		)
	}
})


export default connect((state, ownProps) => {
  return {
    cnt: state.globals.cnt,
  }
}, {add})(Root)