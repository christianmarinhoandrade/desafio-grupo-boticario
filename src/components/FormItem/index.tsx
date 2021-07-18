import { FormItemProps as FormItemPropsAntd } from 'antd'
import * as S from './styles'

export type FormItemProps = { width?: string } & FormItemPropsAntd

function FormItem(props: FormItemProps) {
  return <S.FormItem {...props} />
}

export default FormItem
