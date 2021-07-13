import { Route as ReactRoute } from 'react-router-dom'
import { RouteProps } from '~/utils/merge-routes'

function Route(props: RouteProps) {
  const { component: Component, path } = props

  return (
    <ReactRoute
      path={path}
      exact
      render={() => {
        return <Component />
      }}
    />
  )
}

export default Route
