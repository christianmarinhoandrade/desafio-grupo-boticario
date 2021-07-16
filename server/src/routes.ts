import { Router, Request, Response } from 'express'
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController'
import { RefreshTokenUserUseCase } from './useCases/refreshTokenUser/RefreshTokenUserUseCase'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { refreshAuthenticated } from './middlewares/refreshAuthenticated'

import api from './services/api'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserUseCase = new RefreshTokenUserUseCase()

router.post('/login', authenticateUserController.handle)
router.post(
  '/refresh-token',
  refreshAuthenticated,
  async (request: Request, response: Response) => {
    try {
      const obj = await refreshTokenUserUseCase.execute()
      return response.status(200).json(obj)
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

export { router }
