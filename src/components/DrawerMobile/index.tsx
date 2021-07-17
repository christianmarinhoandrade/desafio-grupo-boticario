import { TitleContent, Drawer } from './styles'
import Logo from '../Logo'

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
          <Logo width={100} />
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
