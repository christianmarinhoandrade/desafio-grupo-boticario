import axios from 'axios'
import notification from '~/components/Notification'
import { setLoad } from '~/store/spinner/action'
import store from '~/store'

const baseURL = ''

const api = axios.create({
  baseURL
})

function signOut() {
  localStorage.clear()
  window.location.href = '/'
  notification.warning('Sesssão expirada.')
}

let setLoading = (load) => {
  store.dispatch(setLoad(load))
}
async function refreshToken() {
  const oldRefreshToken = JSON.parse(localStorage.getItem('@GPB:refresh'))

  const response = await api.post('/user/token/refresh', {
    refresh: oldRefreshToken
  })

  const { token, refresh } = response.data

  localStorage.setItem('@GPB:token', JSON.stringify(token))
  localStorage.setItem('@GPB:refresh', JSON.stringify(refresh))

  return null
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
    const { status, data, config } = error.response

    switch (status) {
      case 400:
        notification.error(data.message)
        break
      case 401:
        if (config.url === '/user/token/refresh') {
          signOut()
          return
        }
        await refreshToken()
        // eslint-disable-next-line consistent-return
        return api.request(config)
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
