import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export function refreshAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { refreshtoken } = request.body

  if (!refreshtoken)
    return response.status(401).json({ message: 'Não autorizado' })

  try {
    verify(refreshtoken, 'ca5bf963-a54c-47d2-a8e6-8ed709696aa8')

    return next()
  } catch (err) {
    return response.status(401).json({ message: 'Token inválido' })
  }
}
