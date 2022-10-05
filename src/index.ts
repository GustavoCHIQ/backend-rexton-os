import dotenv from 'dotenv'
import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes'

var cors = require('cors')

AppDataSource.initialize().then(() => {
  const app = express()
  app.use(cors())

  app.use(express.json())

  app.use(routes)

  return app.listen(process.env.PORT || 3000)
})
