import { InferSchemaType, Model, Schema, Types, model } from "mongoose";

const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    points: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true,
        enum: ['amateur', 'profesional']
    },
    numMembers: {
        type: Number,
        required: true,
        min: 5
    },
    deletedAt: {
        type: Date,
        required: false, //no required
        default: null
    },
    players: [{type: Types.ObjectId, ref: 'Player'}]
}, {
    timestamps: true
})

export type Team = InferSchemaType<typeof teamSchema>

export const TeamModel: Model<Team> = model('teams', teamSchema)
