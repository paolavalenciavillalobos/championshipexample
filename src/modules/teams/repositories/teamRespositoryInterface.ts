import { CreateTeamDto } from "../dtos/CreateTeamDto";
import { UpdateTeamDto } from "../dtos/UpdateTeamDto";
import { Team } from "../models/Team";

export interface ITeamRepository {
    create(data: CreateTeamDto): Promise<Team> 
    getAll(): Promise<Array<Team>>
    getbyId(id: string): Promise<Team>
    update(id: string, data: UpdateTeamDto): Promise<Team>
    softDelete(id: string): Promise<Team>
}