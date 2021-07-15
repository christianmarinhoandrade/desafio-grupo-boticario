import { Router } from 'express'
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController'
import { RefreshTokenUserController } from './useCases/refreshTokenUser/RefreshTokenUserController'

import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController()

router.post('/login', authenticateUserController.handle)
router.post(
  '/refresh-token',
  ensureAuthenticated,
  refreshTokenUserController.handle
)

export { router }
