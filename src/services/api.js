/* eslint-disable no-debugger */
import axios from 'axios'
import notification from '~/components/Notification'
import { setLoad } from '~/store/spinner/action'
import store from '~/store'

const baseURL = 'http://localhost:3000'

const api = axios.create({
  baseURL
})

function signOut() {
  notification.warning('Sesssão expirada.')
  setLoading(true)
  setTimeout(() => {
    localStorage.clear()
    window.location.href = '/'
    setLoading(false)
  }, 1000)
}

const setLoading = (load) => {
  store.dispatch(setLoad(load))
}
async function refreshToken(error) {
  const oldRefreshToken = JSON.parse(localStorage.getItem('@GPB:refresh'))

  const response = await api.post('/refresh-token', {
    refreshtoken: oldRefreshToken
  })

  const token = response?.data?.token
  const refresh = response?.data?.refreshtoken

  if (token && refresh) {
    localStorage.setItem('@GPB:token', JSON.stringify(token))
    localStorage.setItem('@GPB:refresh', JSON.stringify(refresh))

    // eslint-disable-next-line consistent-return
    return api.request(error.response.config)
  }
  return Promise.reject(error)
}

api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('@GPB:token')) || null

  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`
  }

  setLoading(true)
  return config
})

api.interceptors.response.use(
  (response) => {
    setLoading(false)
    return response
  },
  async (error) => {
    setLoading(false)
    const status = error?.response?.status
    const data = error?.response?.data
    const config = error?.response?.config

    switch (status) {
      case 400:
        notification.error(data.message)
        break
      case 401:
        if (config.url === '/refresh-token') {
          signOut()
          return
        }
        return await refreshToken(error)
      case 403:
        notification.error('Usuário não possui acesso a esse recurso.')
        break
      case 404:
        notification.error('Recurso não encontrado.')
        break
      case 500:
        notification.error(data.message)
        break
      default:
        notification.error('')
        break
    }

    // eslint-disable-next-line consistent-return
    return Promise.reject(error)
  }
)

export default api
