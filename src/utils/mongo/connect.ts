import mongoose from 'mongoose'

export const mongoConnect = async (): Promise<typeof mongoose> => {
    const host = process.env.MONGO || 'localhost:27017'
    const user = process.env.MONGO_USER || 'MONGO_INITDB_ROOT_USERNAME'
    const pass = process.env.MONGO_PASS || 'MONGO_INITDB_ROOT_PASSWORD'
    const uri = `mongodb://${user}:${pass}@${host}`
    const dbName = process.env.MONGO_DATABASE || 'ether'

    return mongoose
        .set('strictQuery', true)
        .connect(uri || '', {
            dbName,
        })
        .then((db) => {
            return db
        })
        .catch((e) => {
            console.log(e)
            throw new Error(e)
        })
}
