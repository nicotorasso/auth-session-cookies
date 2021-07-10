
//Instanciamos un esquema con su estructura para crear el modelo de usuario

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema;

const user = new UserSchema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('User', user)