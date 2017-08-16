import { SET_STATUS_REQUESTING } from '../../actions/actionTypes'

export const initialState = {
  requesting: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_STATUS_REQUESTING:
    return { ...state, requesting: 1 }
  default:
    return state
  }
}

export const getRequestingState = state => (state.requesting)
