import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization

  if (!authToken)
    return response.status(401).json({ message: 'Não autorizado' })

  const [, token] = authToken.split(' ')

  try {
    verify(token, 'ca5bf963-a54c-47d2-a8e6-8ed709696aa8')

    return next()
  } catch (err) {
    return response.status(401).json({ message: 'Token inválido' })
  }
}
