import * as S from './styles'

type ItemMenuProps = {
  path: string
  title: string
  name: string
}

type MenuProps = {
  menu: ItemMenuProps[]
  mode?: 'horizontal' | 'inline'
  mobile?: boolean
  signOut?: () => void
  onClick?: (route: string) => void
}

function Menu({
  menu,
  mode = 'horizontal',
  signOut,
  onClick,
  mobile = false,
  ...props
}: MenuProps) {
  const renderMenu = (menus: ItemMenuProps[]) => {
    return menus.map(({ path, title, name, ...props }: ItemMenuProps) => (
      <S.Menu.Item
        onClick={() => {
          if (path && onClick) onClick(path)
        }}
        key={name}
        {...props}
      >
        {title}
      </S.Menu.Item>
    ))
  }

  return (
    <S.Menu mode={mode} {...props}>
      {renderMenu(menu)}
      {mobile && (
        <S.Menu.Item
          key="sair"
          onClick={() => {
            if (signOut) signOut()
          }}
        >
          Sair
        </S.Menu.Item>
      )}
    </S.Menu>
  )
}

export default Menu
