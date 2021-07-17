import { Layout, Typography } from 'antd'
import styled, { css } from 'styled-components'

const { Content } = Layout

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`
const StyledTypography = styled(Typography)`
  margin-left: 5px;
  color: #fff;
`

const StyledContent = styled(Content)`
  padding: 0 50px;

  @media (max-width: 767px) {
    padding: 0 10px;
  }
`
type ContentWrapper = { backgroundcolor: string }
const StyledContentWrapper = styled.div<ContentWrapper>`
  ${({ backgroundcolor }) => css`
    margin-top: 10px;
    padding: 24px;
    min-width: 240px;
    background-color: ${backgroundcolor};
  `}
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
  StyledActionsBarContent
}
