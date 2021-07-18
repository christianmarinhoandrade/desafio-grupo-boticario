import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

import { router } from './routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    return response
  }
)

app.listen(3000, () => console.log('Server is running on port 3000'))
