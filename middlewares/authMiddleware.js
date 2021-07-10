//Middleware para verificar si el usuario está autenticado

function authMiddleware (req, res, next) {
    
    //Si el objeto sesion tiene la propiedad 'isAuth' en true, pasa a la siguiente funcion
    if(req.session.isAuth){
        next();
    }else{
        return res.status(401).json({ message: 'Sorry, you dont be able to enter this private page..'});
    }
}

module.exports = authMiddleware;