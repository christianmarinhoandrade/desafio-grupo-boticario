import styled, { css } from 'styled-components'
import { Form as FormAntd } from 'antd'

import { FormItemProps } from './index'

export const FormItem = styled(FormAntd.Item)<FormItemProps>`
  ${(props) => css`
    width: ${props.width};
  `}
`
