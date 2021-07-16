import { Row, Col, Input, FormInstance } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import MaskedInput from 'antd-mask-input'

import Form from '~/components/Form'
import FormItem from '~/components/FormItem'
import Button from '~/components/Button'

export type CadastroRevendedorForm = {
  name: string
  cpf: string
  password: string
  email: string
}

type LoginProps = {
  onSubmit: (values: CadastroRevendedorForm) => void
  form?: FormInstance
}
function CadastroRevendedorFormComponent(props: LoginProps) {
  const { onSubmit: onFinish, form } = props

  const requiredRule = [{ required: true }]
  const emailRule = [{ types: 'email', required: true }]

  return (
    <Form
      id="form-cadastro-revendedor"
      form={form}
      name="revendedor"
      onFinish={onFinish}
      flexdirection={'column'}
      justifycontent={'center'}
      layout="vertical"
    >
      <FormItem label={'Nome'} name="nome" rules={requiredRule} width={'100%'}>
        <Input placeholder={'Nome Completo'} maxLength={50} />
      </FormItem>
      <FormItem label={'CPF'} name="cpf" rules={requiredRule} width={'100%'}>
        <MaskedInput mask="111.111.11-11" name={'cpf'} placeholder={'CPF'} />
      </FormItem>
      <FormItem label={'E-mail'} name="email" rules={emailRule} width={'100%'}>
        <Input placeholder="E-mail" maxLength={50} />
      </FormItem>

      <FormItem
        label={'Senha'}
        name="senha"
        rules={requiredRule}
        width={'100%'}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder={'Senha'}
          maxLength={50}
        />
      </FormItem>

      <Row align="middle" justify="end" style={{ width: '100%' }}>
        <Col>
          <Button htmlType="submit" type="primary" size="large" shape="round">
            Confirmar
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default CadastroRevendedorFormComponent
