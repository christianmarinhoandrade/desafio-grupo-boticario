import { Request, Response } from 'express'
import api from '../../services/api'

const isOdd = (num) => {
  return num % 2
}
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
class CadastroComprasController {
  async handle(request: Request, response: Response) {
    try {
      const percent = 10 / 100
      const id = random(1, 100)
      const obj = {
        ...request.body,
        id,
        status: 'Em validação',
        cashback: '10%',
        valuecashback: request.body.value * percent
      }
      await api.post('compras', obj)
      //simulando uma api de pagamento.
      const { status } = await new Promise((resolve, reject) => {
        const number = random(1, 100)
        if (isOdd(number)) {
          resolve({
            status: 'Aprovado'
          })
        } else {
          resolve({
            status: 'Reprovado'
          })
        }
      })
      // teoricamente aqui eu passaria o id da compra cadastrada mas para não quebrar a aplicação estou passando o id 1
      await api.put(`compras/1`, { status })

      return response.status(200).json()
    } catch (err) {
      return response.status(400).json({ message: 'Aconteceu algum erro.' })
    }
  }
}

export { CadastroComprasController }
