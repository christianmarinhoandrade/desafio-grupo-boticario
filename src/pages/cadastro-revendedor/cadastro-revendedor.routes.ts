import CadastroRevendedor from './containers/cadastro-revendedor.container'

const routes = [
  {
    name: 'cadastro.revendedor',
    path: '/cadastro-revendedor',
    component: CadastroRevendedor,
    authenticated: true
  }
]

export default routes
