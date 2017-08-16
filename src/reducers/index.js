import { combineReducers } from 'redux'
import form, * as fromReduceForm from './reduceForm'

const rootReducer = combineReducers({
  form
})

export default rootReducer

export const formSelector = (state) => {
  return fromReduceForm.specificFormSelector(state.form)
}
