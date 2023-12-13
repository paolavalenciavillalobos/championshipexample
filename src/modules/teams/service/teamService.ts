import { CreateTeamDto } from "../dtos/CreateTeamDto";
import { UpdateTeamDto } from "../dtos/UpdateTeamDto";
import { Team } from "../models/Team";
import { ITeamRepository } from "../repositories/teamRespositoryInterface";
import { ITeamService } from "./teamServiceInterface";

export class TeamService implements ITeamService {
    constructor(private teamRepository: ITeamRepository){}

    async create(body: CreateTeamDto): Promise<Team> {
        const newTeam = await this.teamRepository.create(body)
        return newTeam
    }
    async getAll(): Promise<Array<Team>> {
        const allTeams = await this.teamRepository.getAll()
        return allTeams
    }
    async getById(id: string): Promise<Team> {
        const teamById = this.teamRepository.getbyId(id)
        return teamById 
    }
    async update(id: string, data: UpdateTeamDto ): Promise<Team> {
        const updateTeam = this.teamRepository.update(id, data)
        return updateTeam
    }
    async softDelete(id: string): Promise<Team> {
        const deleteTeam = this.teamRepository.softDelete(id)
        return deleteTeam
    }

    async addPlayer (idTeam: string, idPlayer: string): Promise<Team> {
        const team = await this.teamRepository.addPlayer(idTeam, idPlayer)
        return team
    }
}