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
  width: 100%;

  @media (max-width: 767px) {
    padding: 0 10px;
  }
`
type ContentWrapper = { backgroundcolor: string }
const StyledContentWrapper = styled.div<ContentWrapper>`
  ${({ backgroundcolor }) => css`
    margin: 10px auto;
    padding: 24px;
    width: 100%;
    min-width: 240px;
    max-width: 1300px;
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
