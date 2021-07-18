import api from '~/services/api'

import { CadastroComprasForm } from './components/cadastro-compras.component'

const services = {
  new(data: CadastroComprasForm) {
    return api.post('/cadastro-compras', data)
  }
}

export default services
