import { Schema } from 'mongoose'

export type Crawler = {
    _id?: string
    number: number
    ion: number
    result: boolean
}

export const mongoSchema = new Schema({
    number: Number,
    ion: Number,
    result: Boolean,
})
