const mongoose = require('mongoose');

//Si se escucha el evento 'open', se imprime en consola un mensaje de conexion exitosa a la BDD
mongoose.connection.on('open', () => console.log('Successfully DB connection!'));

//Funcion para conectar a la base de datos
async function dbConnection ({ dbUri }){
    await mongoose.connect( dbUri, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true } );
}

module.exports = dbConnection;