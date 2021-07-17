import CadastroRevendedor from './containers/cadastro-revendedor.container'

const routes = [
  {
    title: 'Cadastro Revendedor',
    name: 'cadastro.revendedor',
    path: '/cadastro-revendedor',
    component: CadastroRevendedor,
    authenticated: true
  }
]

export default routes
