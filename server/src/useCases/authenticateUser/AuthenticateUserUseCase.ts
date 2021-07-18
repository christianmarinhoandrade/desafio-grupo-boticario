import { Response } from 'express'
import { hash, compare } from 'bcryptjs'
import { GenerateTokenProvider } from '../../provider/GenerateTokenProvider'

interface Request {
  username: string
  password: string
  response: Response
}
class AuthenticateUserUseCase {
  async execute({ username, password, response }: Request) {
    const passwordHash = await hash('1234', 8)
    const userAlreadyExists = username === 'christian'

    if (!userAlreadyExists)
      response.status(400).json({ message: 'Usuário ou senha incorreta.' })

    const passwordMatch = await compare(password, passwordHash)

    if (!passwordMatch)
      response.status(400).json({ message: 'Usuário ou senha incorreta.' })

    const generateTokenProvider = new GenerateTokenProvider()

    const token = await generateTokenProvider.execute()
    const refreshtoken = await generateTokenProvider.execute('1m')

    return { username: 'christian', token, refreshtoken }
  }
}

export { AuthenticateUserUseCase }
