import { Layout, Typography } from 'antd'
import styled from 'styled-components'

const { Title } = Typography
const { Content } = Layout

type DefaultStyleProps = {
  mobile: boolean
}

const StyledLayout = styled(Layout)`
  min-height: 100vh;
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
const StyledContentWrapper = styled.div`
  margin-top: ${(props: DefaultStyleProps) => (!props.mobile ? '10px' : '')};
  padding: 24px;
  min-width: 240px;
  background-color: #fff;

  @media (max-width: 767px) {
    padding: 5px;
  }
`
const StyledActionsBarContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export {
  StyledLayout,
  StyledContent,
  StyledContentWrapper,
  StyledTypography,
  StyledTitle,
  StyledActionsBarContent
}
