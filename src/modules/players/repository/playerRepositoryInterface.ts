import { CreatePlayerDto } from "../dtosPlayers/createPlayerDto";
import { PlayerType } from "../models/players";

export interface IPlayerRepository {
    create(playerData: CreatePlayerDto): Promise<PlayerType>
}