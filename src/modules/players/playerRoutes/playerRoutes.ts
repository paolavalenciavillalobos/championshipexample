import {Router} from 'express'
import { playerModule } from '../factoryPlayer/playerFactory'


export const playerRouter = Router()

playerRouter.post('/', playerModule.create.bind(playerModule))