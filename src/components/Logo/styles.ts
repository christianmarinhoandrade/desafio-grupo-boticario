import styled, { css } from 'styled-components'
import { Image as ImageAntd } from 'antd'
import { ImageProps } from '.'

export const Image = styled(ImageAntd)<ImageProps>`
  ${({ cursor }) => css`
    cursor: ${cursor};
  `}
`
