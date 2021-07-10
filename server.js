require('dotenv').config()
const app = require('./app');
const dbConnection = require('./db/dbConnection');
const { appConfig, dbConfig } = require('./config');

//Funcion que conecta a la base de datos y despues inicia el servidor
//Si ocurre un error lo muestra en consola y termina el proceso

async function initApp( appConfig, dbConfig ){
    try {
        await dbConnection(dbConfig);
        app.listen(appConfig.port, () => console.log(`Server running on: ${appConfig.host}:${appConfig.port}`))
    } catch (err) {
        console.log( err.message );
        process.exit(0);
    }
}

initApp(appConfig, dbConfig);