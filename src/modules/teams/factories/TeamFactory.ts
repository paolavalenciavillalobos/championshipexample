import { TeamController } from "../controllers/teamController";
import { TeamModel } from "../models/Team";
import { TeamRepository } from "../repositories/TeamRepository";
import { TeamService } from "../service/teamService";

class TeamFactory {
    static getInstance() {
        const repository = new TeamRepository(TeamModel)
        const service = new TeamService(repository)
        const controller = new TeamController(service)

        return controller
    }
}

export const teamModule = TeamFactory.getInstance()