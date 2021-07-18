import CadastroCompras from './containers/cadastro-compras.container'

const routes = [
  {
    name: 'cadastro.compras',
    path: '/cadastro-compras',
    component: CadastroCompras,
    authenticated: true
  }
]

export default routes
