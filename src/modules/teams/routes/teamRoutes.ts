import {Router} from 'express'
import { teamModule } from '../factories/TeamFactory'

export const teamRoutes = Router()

teamRoutes.post('/', teamModule.create.bind(teamModule))
teamRoutes.get('/', teamModule.getAll.bind(teamModule))
teamRoutes.get('/:id', teamModule.getById.bind(teamModule))
teamRoutes.put('/:id', teamModule.update.bind(teamModule))
teamRoutes.delete('/:id', teamModule.softDelete.bind(teamModule))