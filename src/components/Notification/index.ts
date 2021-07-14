import { notification } from 'antd'

const notificationMessages = {
  success(description: string) {
    const config = {
      message: 'Sucesso',
      description
    }

    notification.success(config)
  },

  info(description: string) {
    const config = {
      message: 'Informação',
      description
    }

    notification.info(config)
  },

  warning(description: string) {
    const config = {
      message: 'Atenção',
      description
    }
    notification.warning(config)
  },

  error(description: string) {
    const config = {
      message: 'Erro',
      description
    }

    notification.error(config)
  }
}

export default notificationMessages
