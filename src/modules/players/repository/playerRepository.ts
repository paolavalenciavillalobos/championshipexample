import { Model } from "mongoose";
import { PlayerType } from "../models/players";
import { CreatePlayerDto } from "../dtosPlayers/createPlayerDto";
import { IPlayerRepository } from "./playerRepositoryInterface";


export class PlayerRepository implements IPlayerRepository{
    constructor(private playerModel: Model<PlayerType>) {
        
    }

    async create(playerData: CreatePlayerDto): Promise<PlayerType> {
        const newPlayer = await this.playerModel.create(playerData)
        return newPlayer

    }
}