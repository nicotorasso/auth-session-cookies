const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Funciones controladoras para el registro, inicio de sesion y el cierre de sesion

// Funcion controladora para el registro

async function register (req, res) {
    try {
        //Destructuramos del body del request las variables que vamos a usar
        const { username, email, password } = req.body;

        //Consultamos a la BDD si existe un objeto con el email
        const userComparison = await User.findOne({ email: email });

        //Si existe, devolvemos un json con un mensaje
        if(userComparison) return res.status(400).json({ message: 'Email already exist' });

        //Hasheamos la contraseña para evitar guardarla en texto plano
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash( password, salt );

        //Creamos el nuevo usuario con su contraseña hasheada
        const user = new User({
            username,
            email,
            password: hashedPassword
        })

        //Lo guardamos en la BDD
        const newUser = await user.save();

        res.status(201).json({ message: 'Register successfully!!', user: newUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Funcion controladora para el inicio de sesion

async function login (req, res) {
    try {
        //Destructuramos del body del request las variables que vamos a usar
        const { email, password } = req.body;

        //Consultamos a la BDD si existe un objeto con el email
        const user = await User.findOne({ email: email });

        const invalidMessage = `Email or password are incorrect...`;

        //Si no existe, devolvemos un json con un mensaje
        if(!user) return res.status(404).json({ message: invalidMessage });

        if(user.email === email){
            //Si el email es correcto, hacemos la comparacion de password
            const passwordComparison = await bcrypt.compare( password, user.password);

            //Si el password es incorrecto, devolvemos un json con un mensaje
            if(!passwordComparison) return res.status(400).json({ message: invalidMessage });
        }

        //Agregamos al objeto request la session con el username y una propiedad booleana para autorizar
        req.session.username = user.username;
        req.session.isAuth = true;

        res.status(200).json({ message: `Congratulations, you have been able to login. Welcome ${user.username}!` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Funcion controladora para el cierre de sesion

async function logout (req, res) {
    try {
        //Devolvemos un json con un mensaje de despedida
        res.status(200).json({ message: `Adios ${req.session.username}` });

        //Destruimos la sesion de la BDD
        await req.session.destroy((err) => {
            throw err;
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//Exportamos un objeto con las funciones definidas
module.exports = {
    register,
    login,
    logout
}