import { Redirect, Route as ReactRoute } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { spinnerSelector } from '~/store/spinner/selector'

import { RouteMergeProps } from '~/utils/merge-routes'

import { AuthLayout, DefaultLayout } from '~/pages/_layouts'
import { Spin } from 'antd'

import useAuth from '~/hooks/useAuth'

function Route(props: RouteMergeProps) {
  const { component, path, routeBack, title, authenticated, location } = props
  const Component = component as React.ElementType
  const spinner = useSelector(spinnerSelector)

  const auth = useAuth()

  const { signed } = auth

  const isSigned = signed

  if (!isSigned && authenticated) {
    return <Redirect to="/login" />
  } else if (isSigned && !authenticated) {
    return <Redirect to="/home" />
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } else if (isSigned && authenticated && location!.pathname === '/')
    return <Redirect to="/home" />

  const Layout = isSigned ? DefaultLayout : AuthLayout

  return (
    <ReactRoute
      path={path}
      exact
      render={() => (
        <>
          <Spin spinning={spinner} tip="Carregando...">
            <Layout title={title} routeBack={routeBack}>
              <Component />
            </Layout>
          </Spin>
        </>
      )}
    />
  )
}

export default Route
