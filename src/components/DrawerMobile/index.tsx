import { TitleContent, Drawer } from './styles'
import Logo from '../Logo'
import { useHistory } from 'react-router-dom'

export type DrawerMobileProps = {
  children: JSX.Element
  setVisible?: (visible: boolean) => void
  visible: boolean
  username?: string
}
const DrawerMobile = ({
  children,
  setVisible,
  visible,
  username
}: DrawerMobileProps) => {
  const history = useHistory()
  return (
    <Drawer
      title={
        <TitleContent>
          <Logo width={100} onClick={() => history.push('/compras-list')} />
          <div className="message">Olá {username}</div>
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
