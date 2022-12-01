import mongoose, { Schema } from 'mongoose'
import { schema } from 'src/types/raw-data'

export const model = mongoose.model('RawData', new Schema(schema))
