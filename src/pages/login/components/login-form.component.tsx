import { Row, Col, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import Form from '~/components/Form'
import FormItem from '~/components/FormItem'
import Button from '~/components/Button'

export type LoginForm = { username: string; password: string }

type LoginProps = {
  onSubmit: (values: LoginForm) => void
}
function LoginFormComponent(props: LoginProps) {
  const { onSubmit: onFinish } = props

  const rules = [{ required: true }]

  return (
    <Form
      id="form-login"
      name="login"
      onFinish={onFinish}
      flexdirection={'column'}
      justifycontent={'center'}
      layout="vertical"
    >
      <FormItem name="username" rules={rules} width={'100%'} hasFeedback>
        <Input
          prefix={<UserOutlined />}
          placeholder={'Usuário'}
          maxLength={50}
          allowClear
        />
      </FormItem>

      <FormItem name="password" rules={rules} width={'100%'} hasFeedback>
        <Input.Password
          prefix={<LockOutlined />}
          placeholder={'Senha'}
          maxLength={50}
          allowClear
        />
      </FormItem>

      <Row align="middle" justify="end" style={{ width: '100%' }}>
        <Col>
          <Button htmlType="submit" type="primary" size="large" shape="round">
            Entrar
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default LoginFormComponent
