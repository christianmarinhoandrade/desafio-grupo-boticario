import { Layout, Menu, Avatar, Breadcrumb, Typography } from 'antd'
import styled from 'styled-components'

const { Title } = Typography
const { Header, Content } = Layout
const { SubMenu } = Menu

type DefaultStyleProps = {
  mobile: boolean
}

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  ${(props: DefaultStyleProps) => `
    justify-content:  ${props.mobile ? 'space-around' : 'flex-end'} 
  `};
`

const StyledMenu = styled(Menu)`
  width: 100%;
`
const StyledSubMenu = styled(SubMenu)``

const StyledAvatar = styled(Avatar)`
  cursor: pointer;
  width: 30px;
`

const StyledLanguage = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  width: 80px;
`

const StyledBell = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  width: 50px;
`

const StyledAlert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  font-size: 12px;
  color: #fff;
  background-color: red;
`

const StyledTypography = styled(Typography)`
  margin-left: 5px;
  color: #fff;
`

const StyledTitle = styled(Title)`
  width: 80%;
  padding: 10px;
`

const StyledContent = styled(Content)`
  padding: 0 50px;

  @media (max-width: 767px) {
    padding: 0 10px;
  }
`

const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 16px 0;

  a {
    cursor: pointer;
  }
`

const StyledContentWrapper = styled.div`
  margin-top: ${(props: DefaultStyleProps) => (!props.mobile ? '10px' : '')};
  padding: 24px;
  min-width: 240px;
  background-color: #fff;

  @media (max-width: 767px) {
    padding: 5px;
  }
`

export {
  StyledLayout,
  StyledHeader,
  StyledMenu,
  StyledSubMenu,
  StyledAvatar,
  StyledContent,
  StyledBreadcrumb,
  StyledContentWrapper,
  StyledLanguage,
  StyledBell,
  StyledTypography,
  StyledTitle,
  StyledAlert
}
