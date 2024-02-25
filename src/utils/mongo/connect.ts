import mongoose from 'mongoose'

console.log(process.env.MONGO)
console.log(process.env.MONGO_USER)
console.log(process.env.MONGO_PASS)
console.log(process.env.MONGO_DATABASE)
export const mongoConnect = async (): Promise<typeof mongoose> => {
    const uri =
        process.env.MONGO_URI ||
        'mongodb://MONGO_INITDB_ROOT_USERNAME:MONGO_INITDB_ROOT_PASSWORD@localhost:27017'
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
