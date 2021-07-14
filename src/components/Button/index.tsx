import { ButtonProps as ButtonPropsAntd } from 'antd'

import * as S from './styles'

export type ButtonProps = {
  width?: string
  height?: string
} & ButtonPropsAntd

const Button = ({
  type,
  onClick,
  id,
  icon,
  width,
  height,
  ...props
}: ButtonProps) => {
  return (
    <>
      <S.Btn
        type={type}
        onClick={(e) => {
          if (onClick) onClick(e)
        }}
        id={id}
        icon={icon}
        width={width}
        height={height}
        {...props}
      />
    </>
  )
}

export default Button
