import api from '~/services/api'

const services = {
  getAll() {
    return api.get('/compras/list')
  }
}

export default services
