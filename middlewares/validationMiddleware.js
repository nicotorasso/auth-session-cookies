const Joi = require('joi');

//Middleware de validacion para los datos del formulario de registro

function validationMiddleware (req, res, next) {

    //Creamos el objeto en el que a cada propiedad le agregamos las validaciones
    const validationSchema = Joi.object(({
        username: Joi.string().alphanum().pattern(new RegExp('^[a-zA-Z0-9]{4,10}$')).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,8}$')).required()
      }));

    const { username, email, password } = req.body;

    //Validamos los datos previamente destructurados del body con el metodo validate
    const { error, value } = validationSchema.validate({ username, email, password });

    //Si hay un error, lo mapeamos para obtener el mensaje y devolvemos un json con el err
    //Si no hay error, pasamos el value al body de la request
    if (error) {
        const err = error.details.map(x => x.message).join(', ');

        return res.json({ invalid: err });
    } else {
        req.body = value;
        next();
    }
}

module.exports = validationMiddleware;