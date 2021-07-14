import { Layout, Row, Card, Typography } from 'antd'
import styled from 'styled-components'

const { Content } = Layout
const { Title } = Typography

const StyledLayout = styled(Layout)`
  overflow: hidden;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondaryColor};
  background-image: ${(props) =>
    `linear-gradient(to left, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
`

const StyledContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledRow = styled(Row)`
  max-width: 800px;
  width: 100%;
`

const StyledCard = styled(Card)`
  margin: 16px;
  border-radius: 16px;
`

const StyledTitle = styled(Title)`
  && {
    font-size: 22px;
  }
`

const StyledSubtitle = styled(Title)`
  &&& {
    margin: 0;
    font-size: 16px;
    font-weight: normal;
  }
`

export {
  StyledLayout,
  StyledContent,
  StyledRow,
  StyledCard,
  StyledTitle,
  StyledSubtitle
}
