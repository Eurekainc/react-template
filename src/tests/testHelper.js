import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import sinon from 'sinon'

import browserStorage from '../helpers/local-storage-wrapper'

const middlewares = [thunk]
export const mockStore = configureStore(middlewares)
export const initialState = {}

export const stubSetObj = sinon.stub(browserStorage, 'setObject')
export const stubGetObj = sinon.stub(browserStorage, 'getObject')
export const stubGet = sinon.stub(browserStorage, 'get')
