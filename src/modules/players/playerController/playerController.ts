import { Request, Response } from "express";
import { IPlayerService } from "../playerService/playerRepositoryInterface";

export class PlayerController {
    constructor(private service: IPlayerService) {}

    async create (req: Request, res: Response) {
        try{
            const {body} = req
            const result = await this.service.create(body)
            res.status(201).json(result)

        }catch(error: any) {
            res.status(500).json(error)
        }
    }
}