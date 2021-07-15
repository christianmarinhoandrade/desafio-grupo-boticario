import { Response } from 'express'
import { RefreshTokenUserUseCase } from './RefreshTokenUserUseCase'

class RefreshTokenUserController {
  async handle(response: Response) {
    const refreshTokenUserUseCase = new RefreshTokenUserUseCase()

    const obj = await refreshTokenUserUseCase.execute()
    return response.json(obj)
  }
}

export { RefreshTokenUserController }
