import { GenerateTokenProvider } from '../../provider/GenerateTokenProvider'

class RefreshTokenUserUseCase {
  async execute() {
    const generateTokenProvider = new GenerateTokenProvider()

    const token = await generateTokenProvider.execute()
    const refreshtoken = await generateTokenProvider.execute('1m')

    return { token, refreshtoken }
  }
}

export { RefreshTokenUserUseCase }
