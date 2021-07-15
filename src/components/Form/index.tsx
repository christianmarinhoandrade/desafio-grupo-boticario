import { FormProps as FormPropsAntd } from 'antd'
import * as S from './styles'

export type FormProps = {
  justifycontent?: 'start' | 'center' | 'space-between' | 'space-arou'
  flexdirection?: 'column' | 'row'
  id: string
} & FormPropsAntd

function Form({
  form,
  justifycontent = 'center',
  flexdirection = 'row',
  children,
  onFinish,
  id,
  ...props
}: FormProps) {
  return (
    <S.Form
      id={id}
      layout="vertical"
      form={form}
      justifycontent={justifycontent}
      flexdirection={flexdirection}
      onFinish={onFinish}
      {...props}
    >
      {children}
    </S.Form>
  )
}

export default Form
