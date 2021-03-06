import { RouteProps } from 'react-router-dom'
const routesContext = require.context('../pages', true, /.routes./)

export type RouteMergeProps = {
  name?: string
  path?: string
  list?: boolean
  authenticated: boolean | undefined
} & RouteProps
const routes: RouteMergeProps[] = []

routesContext.keys().forEach((route) => {
  routes.push(...routesContext(route).default)
})

export default routes
