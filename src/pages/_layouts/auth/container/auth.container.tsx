import { Col } from 'antd'

import {
  StyledLayout,
  StyledContent,
  StyledRow,
  StyledCard,
  StyledTitle,
  StyledSubtitle
} from '../auth.styles'

import Logo from '~/components/Logo'
import Footer from '~/components/Footer'

type AuthProps = {
  children: JSX.Element
}

function AuthContainer(props: AuthProps) {
  const { children } = props

  const logoWidth = 200

  return (
    <StyledLayout>
      <StyledContent>
        <StyledRow align="middle" justify="center">
          <Col md={8}>
            <Logo width={logoWidth} />
          </Col>

          <Col span={24} md={16}>
            <StyledCard>
              <StyledTitle level={1}>Grupo Boticário</StyledTitle>
              <StyledSubtitle level={2}>Login</StyledSubtitle>
              {children}
            </StyledCard>
          </Col>
        </StyledRow>
      </StyledContent>

      <Footer color="#fff" />
    </StyledLayout>
  )
}

export default AuthContainer
