import { ITeamService } from "../service/teamServiceInterface";
import {Request, Response} from "express"

export class TeamController {
    constructor(private teamService: ITeamService) { }

    async create(req: Request, res: Response) {
        try{
            const {body} = req
            const result = await this.teamService.create(body)
            res.status(201).json(result)
        } catch(error: any) {
            res.status(500).json({error})
        } 
    }
    async getAll(req: Request, res: Response) {
        try{
            const result = await this.teamService.getAll()
            res.status(200).json(result)
        }catch(error: any){
            res.status(500).json({error})
        }
    }
    async getById(req: Request, res: Response) {
        try{
            const {id} = req.params
            const result = await this.teamService.getById(id)
            res.status(200).json(result)
        }catch (error: any){
            res.status(500).json({error})
        }
    }
    async update(req: Request, res: Response) {
        try{
            const {id} = req.params
            const {body} = req
            const result = await this.teamService.update(id, body)
            res.status(200).json(result)
        }catch (error: any){
            res.status(500).json({error})
        }
    }
    async softDelete(req: Request, res: Response) {
        try{
            const {id} = req.params
            const result = await this.teamService.softDelete(id)  
            res.status(200).json(result)
        }catch (error: any){
            res.status(500).json({error})
        }
    }

    async addPlayer(req: Request, res: Response) {
        try{
            const {body} = req
            const {idTeam, idPlayer} = body
            const result = await this.teamService.addPlayer(idTeam, idPlayer)
            res.status(200).json(result)

        }catch (error: any) {
            res.status(500).json({error})
        }
    }
}