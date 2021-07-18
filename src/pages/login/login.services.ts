import api from '~/services/api'
import { LoginForm } from './components/login-form.component'

const services = {
  login(data: LoginForm) {
    return api.post('/login', data)
  }
}

export default services
