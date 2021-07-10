
//Objeto de configuracion que hace referencia a las variables de entorno

const config = {
    appConfig: {
        host: process.env.APP_HOST,
        port: process.env.APP_PORT
    },
    dbConfig: {
        dbUri: process.env.DB_URI
    },
    sessionConfig: {
        secret: process.env.SESSION_SECRET_CODE,
        store: {
            uri: process.env.DB_URI,
            collection: process.env.DB_COLLECTION_SESSION_NAME
        }
    }
}

module.exports = config;