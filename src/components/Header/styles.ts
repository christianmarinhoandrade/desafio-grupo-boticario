import styled, { css } from 'styled-components'

import { Layout } from 'antd'
import { HeaderProps } from '.'

const HeaderAntd = Layout.Header

export const Header = styled(HeaderAntd)<HeaderProps>`
  display: flex;
  align-items: center;
  ${(props) => css`
    justify-content: ${props.justifycontent};
  `};
`
