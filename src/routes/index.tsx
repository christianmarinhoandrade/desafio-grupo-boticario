import { Switch } from 'react-router-dom'

import Route from './Route'

import NotFoundContainer from '~/pages/notfound/containers/notfound.container'

import routes, { RouteMergeProps } from '~/utils/merge-routes'

function Routes() {
  return (
    <Switch>
      {routes.map((route: RouteMergeProps) => (
        <Route
          key={route.name}
          routeBack={route.routeBack}
          authenticated={route.authenticated}
          path={route.path}
          component={route.component}
          list={route.list}
          exact
        />
      ))}
      <Route component={NotFoundContainer} authenticated />
    </Switch>
  )
}

export default Routes
