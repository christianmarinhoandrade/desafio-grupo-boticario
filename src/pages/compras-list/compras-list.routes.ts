import ComprasList from './containers/compras-list.container'

const routes = [
  {
    name: 'compras.list',
    path: '/compras-list',
    component: ComprasList,
    authenticated: true,
    list: true
  }
]

export default routes
