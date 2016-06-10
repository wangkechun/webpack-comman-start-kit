import test from 'ava'
import {cnt} from '../reducers'
import {add} from '../actions'

test('cnt', t =>{
	const r = cnt(999, add())
	t.truthy(r===1000)
})