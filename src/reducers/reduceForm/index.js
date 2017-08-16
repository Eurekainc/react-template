import { reducer } from 'redux-form'

export default reducer

const isFormActive = (state) =>
  (state && state.specificForm && state.specificForm.values)

export const specificFormSelector = (state) =>
  ( isFormActive(state) ? state.specificForm.values : {})
