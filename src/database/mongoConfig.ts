import {connection, connect, disconnect } from 'mongoose'

export class MongoConfig {
    static initialize () {
        try{
            connection.on('error', (e) => console.log('falha na conexão.error: ', e))
            .on('open', () => console.log('conetado ao mongodb'))
            .on('close', () => console.log('disconetado do mongodb'))
            connect(process.env.MONGO_URL as string)
        }
        catch (error: any) {
            console.log('falha na conexão: ', error)
        }
    }

    static finish () {
        disconnect()
    }
}