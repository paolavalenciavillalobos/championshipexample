import express from 'express'
import dotenv from 'dotenv'
import { teamRoutes } from './modules/teams/routes/teamRoutes'
import { MongoConfig } from './database/mongoConfig'
import { logMiddleware } from './middlewares/logMiddleware'
import { playerRouter } from './modules/players/playerRoutes/playerRoutes'

dotenv.config()

MongoConfig.initialize()

const app = express()

app.use(express.json())

app.use('/teams', teamRoutes)
app.use('/players', playerRouter)
//app.use(logMiddleware()) uso geral em toda a app

app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`))