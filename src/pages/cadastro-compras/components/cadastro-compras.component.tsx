import { Row, Col, Input, FormInstance, Typography } from 'antd'

import MaskedInput from 'antd-mask-input'
import MoneyInput from 'antd-money'

import Form from '~/components/Form'
import FormItem from '~/components/FormItem'
import Button from '~/components/Button'

export type CadastroComprasForm = {
  code: string
  value: string
  dates: string
}

type CadastroComprasFormProps = {
  onSubmit: (values: CadastroComprasForm) => void
  form?: FormInstance
}
function CadastroComprasFormComponent(props: CadastroComprasFormProps) {
  const TitleAntd = Typography.Title
  const { onSubmit: onFinish, form } = props

  const requiredRule = [{ required: true }]

  return (
    <>
      <TitleAntd level={4}>Cadastro de Compras</TitleAntd>
      <Form
        id="form-cadastro-compras"
        form={form}
        name="compras"
        onFinish={onFinish}
        flexdirection={'column'}
        justifycontent={'center'}
        layout="vertical"
      >
        <FormItem
          label={'Código'}
          name="code"
          rules={requiredRule}
          width={'100%'}
        >
          <Input placeholder={'Código'} maxLength={50} />
        </FormItem>
        <FormItem
          label={'Valor'}
          name="Valor"
          rules={requiredRule}
          width={'100%'}
        >
          <MoneyInput style={{}} prefix={'R$'} commaSeperator={true} />
        </FormItem>
        <FormItem
          label={'Data'}
          name="date"
          rules={requiredRule}
          width={'100%'}
        >
          <MaskedInput placeholder={'Data'} mask="11/11/1111" name={'date'} />
        </FormItem>

        <Row align="middle" justify="end" style={{ width: '100%' }}>
          <Col>
            <Button htmlType="submit" type="primary" size="large" shape="round">
              Confirmar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default CadastroComprasFormComponent
