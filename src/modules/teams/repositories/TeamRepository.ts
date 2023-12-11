import { Model, isValidObjectId } from "mongoose"
import { Team, TeamModel } from "../models/Team"
import { CreateTeamDto } from "../dtos/CreateTeamDto"
import { UpdateTeamDto } from "../dtos/UpdateTeamDto"
import { ITeamRepository } from "./teamRespositoryInterface"

export class TeamRepository implements ITeamRepository {
     constructor(private teamModel: Model<Team>) {}

    async create(data: CreateTeamDto): Promise<Team> {
        const newTeam = await this.teamModel.create(data)
        if(!newTeam){
            throw new Error('error: cant create new team')
            
        }
        return newTeam
    }
    async getAll(): Promise<Array<Team>> { //<team[]>
        const allTeams = await this.teamModel.find({deletedAt: null})
        if(!allTeams){
            throw new Error('error: cant find all teams')   
        }
        return allTeams 
    }

    async getbyId(id: string): Promise<Team> {
        if(!isValidObjectId(id)){
            throw new Error('error: invalid id')
        }
        const team =  await this.teamModel.findOne({deletedAt: null, _id: id})
        if(!team){
            throw new Error('error: cant find team')
            
        }
        return team 
    }

    async update(id: string, data: UpdateTeamDto): Promise<Team> {
        if(!isValidObjectId(id)){
            throw new Error('error: invalid id')
        }
        const team = await this.getbyId(id)
        if(!team){
            throw new Error('error: invalid id')
        }
        const updatedTeam = await this.teamModel.findByIdAndUpdate(id, data, {new: true})
        if(!updatedTeam){
            throw new Error('error: cant update team')
            
        }
        return updatedTeam
        }
     async softDelete(id: string): Promise<Team> {
        if(!isValidObjectId(id)){
            throw new Error('error: invalid id')
        }
        const team = await this.getbyId(id)
        if(!team){
            throw new Error('error: invalid id')
        }
        const deletedTeam = await this.teamModel.findByIdAndUpdate(id, {deletedAt: new Date()})
        if(!deletedTeam){
            throw new Error('cant delete team')
        }
        return deletedTeam
    }
}

