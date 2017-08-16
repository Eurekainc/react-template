import { combineReducers } from 'redux'
import reducer, * as fromSampleReducer from './sampleReducer'

const rootReducer = combineReducers({
  reducer,
})

export default rootReducer

export const getRequestingState = state => fromSampleReducer.getRequestingState(state.reducer)
