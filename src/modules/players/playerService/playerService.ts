import { CreatePlayerDto } from "../dtosPlayers/createPlayerDto";
import { PlayerType } from "../models/players";
import { IPlayerRepository } from "../repository/playerRepositoryInterface";
import { IPlayerService } from "./playerRepositoryInterface";

export class PlayerService implements IPlayerService{
    constructor(private repository: IPlayerRepository) {}

    async create(dataPlayer: CreatePlayerDto): Promise<PlayerType> {
        const newPlayer = await this.repository.create(dataPlayer)
        if(!newPlayer){
            throw new Error('cannot create player')
        } return newPlayer
    }
}