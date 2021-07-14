import { ConfigProvider as ConfigProviderAntd } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'

import validateMessages from './validateMessages'

type ConfigProvider = { children: JSX.Element }
function ConfigProvider(props: ConfigProvider) {
  const { children } = props

  return (
    <ConfigProviderAntd locale={ptBR} form={{ validateMessages }}>
      {children}
    </ConfigProviderAntd>
  )
}

export default ConfigProvider
