import { Button, ButtonProps } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

export type ButtonDrawerProps = { onClick?: () => void } & ButtonProps
const ButtonDrawer = ({ onClick, ...props }: ButtonDrawerProps) => {
  return <Button onClick={onClick} icon={<MenuOutlined />} {...props} />
}

export default ButtonDrawer
