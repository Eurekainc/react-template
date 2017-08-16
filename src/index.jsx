import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { mockAxios } from './utils/axios'
import App from './components/App'
import store from './store'

mockAxios()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
