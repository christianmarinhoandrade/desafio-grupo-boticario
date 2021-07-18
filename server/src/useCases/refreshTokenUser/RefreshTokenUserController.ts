import { Request, Response } from 'express'
import { RefreshTokenUserUseCase } from './RefreshTokenUserUseCase'

class RefreshTokenUserController {
  async handle(request: Request, response: Response) {
    try {
      const refreshTokenUserUseCase = new RefreshTokenUserUseCase()
      const obj = await refreshTokenUserUseCase.execute()
      return response.status(200).json(obj)
    } catch (err) {
      return response.status(400).json({ message: 'Aconteceu algum erro.' })
    }
  }
}

export { RefreshTokenUserController }
