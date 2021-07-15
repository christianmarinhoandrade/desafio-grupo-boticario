import { Drawer, Image } from 'antd'
import { TitleContent } from './styles'

import grupoBoticario from '@/img/logo-grupo-boticario.png'

export type DrawerMobileProps = {
  children: JSX.Element
  setVisible?: (visible: boolean) => void
  visible: boolean
}
const DrawerMobile = ({ children, setVisible, visible }: DrawerMobileProps) => {
  return (
    <Drawer
      title={
        <TitleContent>
          <Image
            src={grupoBoticario}
            width={100}
            preview={false}
            alt="Grupo Boticário"
          />
        </TitleContent>
      }
      placement="left"
      closable={false}
      onClose={() => {
        if (setVisible) setVisible(false)
      }}
      visible={visible}
    >
      {children}
    </Drawer>
  )
}

export default DrawerMobile
