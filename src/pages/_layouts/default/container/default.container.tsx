/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Grid } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

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
  StyledTitle,
  StyledActionsBarContent
} from '../default.styles'

type DefaultProps = {
  routeBack?: string
  title?: string
  children: JSX.Element
  isDesktop?: boolean
}

function DefaultContainer({
  routeBack,
  title,
  children,
  isDesktop
}: DefaultProps) {
  const auth = useAuth()

  const { useBreakpoint } = Grid
  const screen = useBreakpoint()
  const { md } = screen

  let mobile = false
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
      title: 'teste',
      path: '/teste',
      name: 'teste'
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
            signOut={auth.signOut}
          />
        )}
      </StyledActionsBarContent>
    )
  }
  /* ActionsBar */

  return (
    <StyledLayout>
      <DrawerMobile setVisible={setVisible} visible={visible}>
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
              <Logo width={70} onClick={() => history.push('/home')} />
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
        <StyledContentWrapper mobile={md ? false : true}>
          {mobile && routeBack && (
            <ArrowLeftOutlined
              style={{ fontSize: '20px' }}
              onClick={() => history.push(routeBack)}
            />
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
