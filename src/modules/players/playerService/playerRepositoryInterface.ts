import { CreatePlayerDto } from "../dtosPlayers/createPlayerDto";
import { PlayerType } from "../models/players";

export interface IPlayerService {
    create(dataPlayer: CreatePlayerDto): Promise<PlayerType>
}