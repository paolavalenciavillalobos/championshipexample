import { PlayerModel } from "../models/players";
import { PlayerController } from "../playerController/playerController";
import { PlayerRepository } from "../repository/playerRepository";
import { PlayerService } from "../playerService/playerService";

export class PlayerFactory {
    static getInstance() {
        const repository = new PlayerRepository(PlayerModel)
        const service = new PlayerService(repository)
        const controller = new PlayerController(service)
        return controller
    }
}

export const playerModule = PlayerFactory.getInstance() 