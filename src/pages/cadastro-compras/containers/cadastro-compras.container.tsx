import CadastroComprasFormComponent, {
  CadastroComprasForm
} from '../components/cadastro-compras.component'
import { Form } from 'antd'
import api from '../cadastro-compras.services'
import notification from '~/components/Notification'

function CadastroComprasContainer() {
  const [form] = Form.useForm()
  const onSubmit = async (values: CadastroComprasForm) => {
    try {
      await api.new(values)
      notification.success('Cadastro realizado com sucesso.')
      form.resetFields()
    } catch (err) {
      /*empty */
    }
  }

  return <CadastroComprasFormComponent onSubmit={onSubmit} form={form} />
}

export default CadastroComprasContainer
