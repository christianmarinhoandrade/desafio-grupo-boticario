import { Layout, Typography } from 'antd'
import styled from 'styled-components'

import { FooterProps } from './index'

const FooterAntd = Layout.Footer
const TextAntd = Typography.Text

export const Footer = styled(FooterAntd)`
  background-color: transparent;
  text-align: center;
`

export const Text = styled(TextAntd)<FooterProps>`
  color: ${(props) => props.color};
`
