import { GenerateTokenProvider } from '../../provider/GenerateTokenProvider'

class RefreshTokenUserUseCase {
  async execute() {
    const generateTokenProvider = new GenerateTokenProvider()

    const token = await generateTokenProvider.execute()
    const refresh = await generateTokenProvider.execute('40s')

    return { token, refresh }
  }
}

export { RefreshTokenUserUseCase }
