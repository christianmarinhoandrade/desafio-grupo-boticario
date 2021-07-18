import { Redirect, Route as ReactRoute } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { spinnerSelector } from '~/store/spinner/selector'

import { RouteMergeProps } from '~/utils/merge-routes'

import { AuthLayout, DefaultLayout } from '~/pages/_layouts'
import { Spin } from 'antd'

import useAuth from '~/hooks/useAuth'

function Route(props: RouteMergeProps) {
  const { component, path, authenticated, location, list } = props
  const Component = component as React.ElementType
  const load = useSelector(spinnerSelector)

  const auth = useAuth()

  const { signed } = auth

  const isSigned = signed

  if (!isSigned && authenticated) {
    return <Redirect to="/login" />
  } else if (isSigned && !authenticated) {
    return <Redirect to="/compras-list" />
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } else if (isSigned && authenticated && location!.pathname === '/')
    return <Redirect to="/compras-list" />

  const Layout = isSigned ? DefaultLayout : AuthLayout

  return (
    <ReactRoute
      path={path}
      render={() => (
        <>
          <Spin spinning={load} tip="Carregando...">
            <Layout list={list}>
              <Component />
            </Layout>
          </Spin>
        </>
      )}
    />
  )
}

export default Route
