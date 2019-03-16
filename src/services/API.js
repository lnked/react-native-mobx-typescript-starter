import { create } from 'apisauce'
import { apiUrl, stagingUrl } from '@/configs/env.json'

const BASE_URL = __DEV__ ? stagingUrl : apiUrl

const api = create({
  baseURL: BASE_URL
})

const anotherEndpointApi = create({
  baseURL: `${BASE_URL}/another-root`,
})

const createSession = (email, password) => api.post('/sessions', { email, password })

const userAuth = (authToken, token, userType) => {
  [api, anotherEndpointApi].forEach(endpoint => endpoint.setHeaders({
    Authorization: `Token token=${authToken}`
  }))

  return api.get(`/users/${token}`)
}

const clearNotes = (token, item) => (
  anotherEndpointApi.delete(`/${token}/get/${item}`)
)

export default {
  userAuth,
  clearNotes,
  createSession,
}
