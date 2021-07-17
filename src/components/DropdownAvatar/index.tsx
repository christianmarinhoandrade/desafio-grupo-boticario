import {} from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { Menu } from '../Menu/styles'
import * as S from './styles'

export type DropdownAvatarProps = { username?: string; signOut?: () => void }
const DropdownAvatar = ({
  username,
  signOut,
  ...props
}: DropdownAvatarProps) => {
  const userMenu = (
    <Menu>
      <Menu.ItemGroup title={`Ola ${username}`}>
        <Menu.Item
          onClick={() => {
            if (signOut) signOut()
          }}
        >
          Sair
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  )

  return (
    <S.Dropdown overlay={userMenu} {...props}>
      <S.Avatar icon={<UserOutlined />} />
    </S.Dropdown>
  )
}

export default DropdownAvatar
