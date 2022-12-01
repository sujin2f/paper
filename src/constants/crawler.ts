import mongoose, { Schema } from 'mongoose'
import { schema } from 'src/types/crawler'

export const model = mongoose.model('Crawler', new Schema(schema))
