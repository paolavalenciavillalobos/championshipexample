import express from 'express'
import dotenv from 'dotenv'
import { teamRoutes } from './modules/teams/routes/teamRoutes'
import { MongoConfig } from './database/mongoConfig'

dotenv.config()

MongoConfig.initialize()

const app = express()

app.use(express.json())

app.use('/teams', teamRoutes)

app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`))