/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Grid } from 'antd'

import Logo from '~/components/Logo'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Menu from '~/components/Menu'
import ButtonDrawer from '~/components/ButtonDrawer'
import DropdownAvatar from '~/components/DropdownAvatar'
import DrawerMobile from '~/components/DrawerMobile'

import useAuth from '~/hooks/useAuth'

import {
  StyledLayout,
  StyledContent,
  StyledContentWrapper,
  StyledActionsBarContent
} from '../default.styles'

type DefaultProps = {
  children: JSX.Element
  list?: boolean
  isDesktop?: boolean
}

function DefaultContainer({ list, children, isDesktop }: DefaultProps) {
  const auth = useAuth()

  const { useBreakpoint } = Grid
  const screen = useBreakpoint()
  const { md } = screen

  let mobile: boolean
  if (!isDesktop) mobile = md ? false : true
  else mobile = false

  const [visible, setVisible] = useState(false)

  /* USEEFFECT */
  useEffect(() => {
    if (md) {
      setVisible(false)
    }
  }, [md])
  /* USEEFFECT */

  const history = useHistory()
  /* MENU */
  const menu = [
    {
      title: 'Lista de Compras',
      path: '/compras-list',
      name: 'compras.list'
    },
    {
      title: 'Cadastro Compras',
      path: '/cadastro-compras',
      name: 'cadastro.compras'
    },
    {
      title: 'Cadastro Revendedor',
      path: '/cadastro-revendedor',
      name: 'cadastro.revendedor'
    }
  ]

  const onClick = (route: string) => {
    history.push(route)
  }
  /* MENU */

  /* ActionsBar */
  const ActionsBar = () => {
    return (
      <StyledActionsBarContent>
        {mobile && <ButtonDrawer onClick={() => setVisible(!visible)} ghost />}
        {!mobile && (
          <DropdownAvatar
            username={auth.user?.username.toUpperCase()}
            signOut={auth.signOut!}
          />
        )}
      </StyledActionsBarContent>
    )
  }
  /* ActionsBar */

  return (
    <StyledLayout>
      <DrawerMobile
        setVisible={setVisible}
        visible={visible}
        username={auth.user?.username.toUpperCase()}
      >
        <Menu
          menu={menu}
          signOut={auth.signOut!}
          onClick={onClick}
          mode={!mobile ? 'horizontal' : 'inline'}
          mobile={mobile}
        />
      </DrawerMobile>
      <Header justifycontent={!mobile ? 'space-around' : 'flex-end'}>
        <>
          {!mobile && (
            <>
              <Logo
                width={90}
                cursor={'pointer'}
                onClick={() => history.push('/compras-list')}
              />
              <Menu
                menu={menu}
                signOut={auth.signOut!}
                onClick={onClick}
                mode={!mobile ? 'horizontal' : 'inline'}
                mobile={mobile}
              />
            </>
          )}
          <ActionsBar />
        </>
      </Header>

      <StyledContent>
        <StyledContentWrapper backgroundcolor={list ? '#f0f2f5' : '#fff'}>
          {children}
        </StyledContentWrapper>
      </StyledContent>

      <Footer />
    </StyledLayout>
  )
}

export default DefaultContainer
