import { sign } from 'jsonwebtoken'

class GenerateTokenProvider {
  async execute(expires?: string) {
    const token = sign({}, 'ca5bf963-a54c-47d2-a8e6-8ed709696aa8', {
      expiresIn: expires || '20s'
    })
    return token
  }
}

export { GenerateTokenProvider }
