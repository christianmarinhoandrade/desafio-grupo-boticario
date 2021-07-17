import { Router, Request, Response } from 'express'
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController'
import { RefreshTokenUserController } from './useCases/refreshTokenUser/RefreshTokenUserController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { refreshAuthenticated } from './middlewares/refreshAuthenticated'

import api from './services/api'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController()

router.post('/login', authenticateUserController.handle)
router.post(
  '/refresh-token',
  refreshAuthenticated,
  async (request: Request, response: Response) => {
    try {
      return await refreshTokenUserController.handle(request, response)
    } catch (err) {
      return response.status(400).json({ message: 'Aconteceu algum erro.' })
    }
  }
)

router.post(
  '/cadastro-revendedor',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
    try {
      await api.post('revendedor', request.body)
      return response.status(200).json()
    } catch (err) {
      return response.status(400).json({ message: 'Aconteceu algum erro.' })
    }
  }
)

router.get(
  '/compras/list',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
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
)

export { router }
