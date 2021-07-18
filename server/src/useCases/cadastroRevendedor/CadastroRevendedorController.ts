import { Request, Response } from 'express'
import api from '../../services/api'

class CadastroRevendedorController {
  async handle(request: Request, response: Response) {
    try {
      await api.post('revendedor', request.body)
      return response.status(200).json()
    } catch (err) {
      return response.status(400).json({ message: 'Aconteceu algum erro.' })
    }
  }
}

export { CadastroRevendedorController }
