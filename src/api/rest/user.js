import { makeRequest } from '../requests'

export const getUserData = () => {
  return makeRequest({
    url: '/user'
  })
}
