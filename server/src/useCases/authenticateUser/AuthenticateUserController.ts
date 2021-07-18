import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const authenticateUserUseCase = new AuthenticateUserUseCase()

    const obj = await authenticateUserUseCase.execute({
      username,
      password,
      response
    })
    return response.json(obj)
  }
}

export { AuthenticateUserController }
