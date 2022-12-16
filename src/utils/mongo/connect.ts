import mongoose from 'mongoose'

export const mongoConnect = async (): Promise<typeof mongoose> => {
    const uri = process.env.MONGO_URI
    const dbName = process.env.MONGO_DATABASE

    return mongoose
        .connect(uri || '', {
            dbName,
        })
        .then((db) => {
            return db
        })
        .catch(() => {
            throw new Error('')
        })
}
