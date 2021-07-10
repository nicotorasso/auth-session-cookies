const express = require('express');
const app = express();
const authRoute = require('./routes/authRoute');
const methodMiddleware = require('./middlewares/methodMiddleware');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const { sessionConfig } = require('./config');

// Middlewares
app.use( express.urlencoded( { extended: true} ) );
app.use( express.json() );

//Conexion al store en la BDD que almacenará la sesion
const store = new MongoDBStore(sessionConfig.store);

//Middleware que configura la sesion
app.use(session({
    secret: sessionConfig.secret,
    resave: false,
    saveUninitialized: true,
    store: store
}))

// Middleware rutas con middleware para aceptar solo metodos GET y POST
app.use('/api/v1', methodMiddleware, authRoute);

module.exports = app;