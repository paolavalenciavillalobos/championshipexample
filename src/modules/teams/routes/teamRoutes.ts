import {Router} from 'express'
import { teamModule } from '../factories/TeamFactory'
import { logMiddleware } from '../../../middlewares/logMiddleware'

export const teamRoutes = Router()

teamRoutes.post('/', logMiddleware, teamModule.create.bind(teamModule))
teamRoutes.get('/', logMiddleware, teamModule.getAll.bind(teamModule))
teamRoutes.get('/:id', logMiddleware, teamModule.getById.bind(teamModule))
teamRoutes.put('/:id', logMiddleware, teamModule.update.bind(teamModule))
teamRoutes.delete('/:id', logMiddleware, teamModule.softDelete.bind(teamModule))
teamRoutes.put('/addplayer', logMiddleware, teamModule.addPlayer.bind(teamModule))