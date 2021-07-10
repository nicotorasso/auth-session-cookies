
//Rutas para la autenticacion y acceso a ruta privada

const router = require('express').Router();
const { register, login, logout } = require('../controllers/authController');
const auth = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');

//Landing page
router.get('/', (req, res) => res.status(200).json({ message: 'Home Page..' }));

//Registro con middleware para validar el body
router.post('/register', validationMiddleware, register);

//Inicio de sesion
router.post('/login', login);

//Ruta privada que necesita validar el middleware de autorizacion
router.get('/secret-page', auth, (req, res) => res.status(200).json({ message: 'Hi, welcome to this private page!!'}));

//Cierre de sesion
router.get('/logout', logout);

module.exports = router;