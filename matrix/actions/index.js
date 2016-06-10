import {
  CALL_API
} from '../middleware/api'
import {t, props} from 'tcomb-react'

export const NUM_SET = 'NUM_SET'
export function set(value){
	return {
		type: NUM_SET,
		value: t.Number(value),
	}
}