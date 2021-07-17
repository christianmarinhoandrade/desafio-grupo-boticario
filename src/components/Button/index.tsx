import { ButtonProps } from 'antd'

import * as S from './styles'

const Button = ({ type, onClick, id, icon, ...props }: ButtonProps) => {
  return (
    <>
      <S.Btn
        type={type}
        onClick={(e) => {
          if (onClick) onClick(e)
        }}
        id={id}
        icon={icon}
        {...props}
      />
    </>
  )
}

export default Button
