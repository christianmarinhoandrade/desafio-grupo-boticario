import { Request, Response } from 'express'
import api from '../../services/api'

class ComprasListController {
  async handle(request: Request, response: Response) {
    try {
      const responseDbjson = await api.get('compras')
      let accumulatedCashbackAmount = 0
      responseDbjson.data.map((item) => {
        accumulatedCashbackAmount =
          accumulatedCashbackAmount + item.valuecashback
      })

      const obj = {
        accumulatedCashbackAmount,
        array: responseDbjson.data
      }
      return response.status(200).json(obj)
    } catch (err) {
      console.log(err)
      return response.status(400).json({ message: 'Aconteceu algum erro.' })
    }
  }
}

export { ComprasListController }
