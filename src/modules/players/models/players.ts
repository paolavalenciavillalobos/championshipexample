import {Schema, Model, model, InferSchemaType} from 'mongoose'

export const playerSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true, min: 16},
    deletedAt: {type: Date, default: null }
}, {timestamps: true})

export type PlayerType = InferSchemaType<typeof playerSchema>

export const PlayerModel: Model<PlayerType> = model('Player', playerSchema)

