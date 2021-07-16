import api from '~/services/api'

import { CadastroRevendedorForm } from './components/cadastroRevendedor.component'

const services = {
  new(data: CadastroRevendedorForm) {
    return api.post('/cadastro-revendedor', data)
  }
}

export default services
