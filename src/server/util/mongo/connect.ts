import mongoose from 'mongoose'

export const mongoConnect = async (): Promise<typeof mongoose> => {
    return mongoose
        .connect(
            'mongodb://MONGO_INITDB_ROOT_USERNAME:MONGO_INITDB_ROOT_PASSWORD@localhost:27017',
            { dbName: 'ether' },
        )
        .then((db) => db)
}
