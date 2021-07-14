import api from '~/services/api'
import { LoginForm } from './components/login-form.component'

const services = {
  login(data: LoginForm) {
    return api.post('/authentication/oauth', data)
  },
  windowsAuthentication() {
    return api.post('/authentication/oauth/windows-authentication', null, {
      withCredentials: true
    })
  }
}

export default services
