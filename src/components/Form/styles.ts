import styled, { css } from 'styled-components'
import { Form as FormAntd } from 'antd'

import { FormProps } from './index'

export const Form = styled(FormAntd)<FormProps>`
  ${(props) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: ${props.justifycontent};
    flex-direction: ${props.flexdirection};
  `}
`
