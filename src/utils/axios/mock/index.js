import MockAdapter from 'axios-mock-adapter'
import { API } from '../../../config'

export default (axios) => {
  const mock = new MockAdapter(axios, { delayResponse: 500 })

  mock.onGet(`${API}/path/to/mock`)
    .reply(200, {
      'content': 'mocked response'
    })
}
