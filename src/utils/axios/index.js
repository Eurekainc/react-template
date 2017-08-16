import axios from 'axios'
import mock from './mock'

const instance = axios.create({})
let mocked = false

export default instance

export const mockAxios = () => {
  if (!mocked) {
    mock(instance)
    mocked = true
  }
}
