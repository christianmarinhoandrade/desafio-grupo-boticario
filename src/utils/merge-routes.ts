import React from 'react'
const routesContext = require.context('../pages', true, /.routes./)

export type RouteProps = {
  name?: string
  path: string
  component: typeof React.Component
}
const routes: RouteProps[] = []

routesContext.keys().forEach((route) => {
  routes.push(...routesContext(route).default)
})

export default routes
