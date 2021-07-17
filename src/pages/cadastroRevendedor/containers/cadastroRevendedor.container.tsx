import CadastroRevendedorFormComponent, {
  CadastroRevendedorForm
} from '../components/cadastroRevendedor.component'
import { Form } from 'antd'
import api from '../cadastroRevendedor.services'
import notification from '~/components/Notification'

function CadastroRevendedorContainer() {
  const [form] = Form.useForm()
  const onSubmit = async (values: CadastroRevendedorForm) => {
    try {
      await api.new(values)
      notification.success('Cadastro realizado com sucesso.')
      form.resetFields()
    } catch (err) {
      /*empty */
    }
  }

  return <CadastroRevendedorFormComponent onSubmit={onSubmit} form={form} />
}

export default CadastroRevendedorContainer