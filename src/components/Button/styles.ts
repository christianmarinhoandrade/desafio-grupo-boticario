import styled, { css } from 'styled-components'
import { Button } from 'antd'

import { ButtonProps } from './index'

export const Btn = styled(Button)<ButtonProps>`
  ${(props) => css`
    width: 100%;
    padding: 0 5px;
    font-size: 15px;
    width: ${props.width};
    height: ${props.height ? `${props.height}!important` : ''};
  `}
`
