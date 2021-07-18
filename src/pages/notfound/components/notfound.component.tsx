import { Result } from 'antd'

function NotFoundComponent() {
  return <Result status="404" title="404" subTitle={'Página não existe'} />
}

export default NotFoundComponent
