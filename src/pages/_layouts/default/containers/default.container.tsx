import { Fragment, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Dropdown, Grid, Drawer, Image, Button as ButtonAntd } from 'antd'
import {
  UserOutlined,
  ArrowLeftOutlined,
  MenuOutlined
} from '@ant-design/icons'

import Logo from '~/components/Logo'
import Footer from '~/components/Footer'

import useAuth from '~/hooks/useAuth'

import grupoBoticario from '@/img/logo-grupo-boticario.png'

import {
  StyledLayout,
  StyledHeader,
  StyledMenu,
  StyledAvatar,
  StyledContent,
  StyledContentWrapper,
  StyledTitle
} from '../default.styles'

type DefaultProps = {
  routeBack?: string
  title?: string
  children: JSX.Element
}

type MenuProps = {
  path: string
  title: string
}

function DefaultContainer(props: DefaultProps) {
  const { routeBack, title, children } = props

  const auth = useAuth()

  const { useBreakpoint } = Grid
  const screen = useBreakpoint()
  const { md } = screen

  const [visible, setVisible] = useState(false)

  /* USEEFFECT */
  useEffect(() => {
    if (md) {
      setVisible(false)
    }
  }, [md])
  /* USEEFFECT */

  /* MENU */
  const menu = [
    {
      title: 'teste',
      path: '/teste'
    }
  ]

  const history = useHistory()
  const onClick = (route: string) => {
    history.push(route)
  }

  const renderMenu = (menus: MenuProps[]) => {
    return menus.map((menu: MenuProps, index: number) => (
      <Fragment key={index}>
        <StyledMenu.Item
          onClick={() => {
            if (menu.path) onClick(menu.path)
          }}
          key={index}
        >
          {menu.title}
        </StyledMenu.Item>
      </Fragment>
    ))
  }

  const Menu = () => {
    return (
      <StyledMenu mode={md ? 'horizontal' : 'inline'}>
        {renderMenu(menu)}
        {!md && (
          <StyledMenu.Item onClick={() => auth.signOut()}>Sair</StyledMenu.Item>
        )}
      </StyledMenu>
    )
  }
  /* MENU */

  /* ActionsBar */
  const ActionsBar = () => {
    const ButtonDrawer = () => {
      return (
        <ButtonAntd
          onClick={() => setVisible(!visible)}
          icon={<MenuOutlined />}
          ghost
        />
      )
    }

    const DropdownAvatar = () => {
      const userMenu = (
        <StyledMenu>
          <StyledMenu.ItemGroup
            title={`Ola ${auth?.user.username.toUpperCase()}`}
          >
            <StyledMenu.Item onClick={() => auth.signOut()}>
              Sair
            </StyledMenu.Item>
          </StyledMenu.ItemGroup>
        </StyledMenu>
      )

      return (
        <Dropdown overlay={userMenu}>
          <StyledAvatar icon={<UserOutlined />} />
        </Dropdown>
      )
    }

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        {!md && <ButtonDrawer />}
        {md && <DropdownAvatar />}
      </div>
    )
  }
  /* ActionsBar */

  /* DrawerMobile */
  const DrawerMobile = () => {
    return (
      <Drawer
        title={
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src={grupoBoticario}
              width={100}
              preview={false}
              alt="Grupo Boticário"
            />
          </div>
        }
        placement="left"
        closable={false}
        onClose={() => {
          setVisible(false)
        }}
        visible={visible}
      >
        <Menu />
      </Drawer>
    )
  }
  /* DrawerMobile */

  return (
    <StyledLayout>
      <DrawerMobile />
      <StyledHeader mobile={md ? true : false}>
        {md && (
          <>
            <Link to="/home">
              <Logo width={70} />
            </Link>
            <Menu />
          </>
        )}
        <ActionsBar />
      </StyledHeader>

      <StyledContent>
        <StyledContentWrapper mobile={md ? true : false}>
          {!md && routeBack && (
            <Link style={{ marginLeft: '10px' }} to={routeBack}>
              <ArrowLeftOutlined style={{ fontSize: '20px' }} />
            </Link>
          )}
          <StyledTitle level={4}>{title}</StyledTitle>
          {children}
        </StyledContentWrapper>
      </StyledContent>

      <Footer />
    </StyledLayout>
  )
}

export default DefaultContainer
