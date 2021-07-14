import { FormProps as FormPropsAntd } from 'antd'
import * as S from './styles'

export type FormProps = {
  justifycontent?: 'start' | 'center' | 'space-between' | 'space-arou'
  flexdirection?: 'column' | 'row'
} & FormPropsAntd

function Form({
  form,
  justifycontent = 'center',
  flexdirection = 'row',
  children,
  onFinish,
  ...props
}: FormProps) {
  return (
    <S.Form
      id="form-filter"
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
