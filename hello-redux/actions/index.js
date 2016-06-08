import {
  CALL_API
} from '../middleware/api'
import {t, props} from 'tcomb-react'

export const CNT_ADD = 'CNT_ADD'
export function add(){
	return {
		type: CNT_ADD,
	}
}