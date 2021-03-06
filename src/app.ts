import CheckoutRouter from './routes/checkout.router'
import * as express from 'express'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'
import { connectMongo } from './connections/mongodb.connection'

class App {
  public express: express.Application

  constructor() {
    this.express = express()
    this.middleware()
    this.routes()
    connectMongo()
  }

  private middleware(): void {
    this.express.use(logger('dev'))
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
  }

  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router()
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Ecommerce API'
      })
    })

    this.express.use('/', router)
    this.express.use('/api/v1/checkouts', CheckoutRouter)
  }
}

export default new App().express