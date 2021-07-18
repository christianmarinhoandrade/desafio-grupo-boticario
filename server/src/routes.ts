import { Router, Request, Response } from 'express'
import { AuthenticateUserController } from './useCases/authenticateUser/AuthenticateUserController'
import { RefreshTokenUserController } from './useCases/refreshTokenUser/RefreshTokenUserController'
import { ComprasListController } from './useCases/comprasList/ComprasListController'
import { CadastroComprasController } from './useCases/cadastroCompras/CadastroComprasController'
import { CadastroRevendedorController } from './useCases/cadastroRevendedor/CadastroRevendedorController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { refreshAuthenticated } from './middlewares/refreshAuthenticated'

const router = Router()

const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController()
const comprasListController = new ComprasListController()
const cadastroRevendedorController = new CadastroRevendedorController()
const cadastroComprasController = new CadastroComprasController()

router.post('/login', authenticateUserController.handle)
router.post(
  '/refresh-token',
  refreshAuthenticated,
  async (request: Request, response: Response) => {
    return await refreshTokenUserController.handle(request, response)
  }
)

router.post(
  '/cadastro-revendedor',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
    return await cadastroRevendedorController.handle(request, response)
  }
)

router.get(
  '/compras/list',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
    return comprasListController.handle(request, response)
  }
)

router.post(
  '/cadastro-compras',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
    return cadastroComprasController.handle(request, response)
  }
)

export { router }
