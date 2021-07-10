# Basic Authentication with Sessions

_El proyecto es una simple autenticacion manejando sesiones_

## Construido con 🛠️

* [Node](https://nodejs.org/en/docs/) - Lenguaje de programacion que utiliza Javascript del lado del servidor
* [Express](https://expressjs.com/es/4x/api.html#express) - El mini-framework para crear una API
* [Mongoose](https://mongoosejs.com/docs/guide.html) - Libreria para trabajar con la base de datos MongoDB
* [Joi](https://joi.dev/api/) - Libreria para validar datos


## Instalación 🔧

_Las librerias que utilizaremos están indicadas en el package.json, asi que solo debes ejecutar el comando para instalar la carpeta node_modules con sus dependecias_

Las dependencias de desarrollo y de proyecto:
```
"devDependencies": {
    "nodemon": "^2.0.7"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "connect-mongodb-session": "^2.4.1",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "joi": "^17.4.0",
    "mongoose": "^5.12.13"
  }
```
Las instalamos con el comando:
```
npm install
```

## Variables de entorno

```
APP_HOST={host}
APP_PORT={port}

DB_URI={mongodb uri}

SESSION_SECRET_CODE={codigo secreto sesion}
DB_COLLECTION_SESSION_NAME={nombre de la coleccion para sesiones}
```


_Ahora solo queda probarlo con [POSTMAN](https://www.postman.com), para hacer peticiones HTTP REST sin necesidad de desarrollar un cliente._
