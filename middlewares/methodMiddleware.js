
//Middleware para evitar que se usen otros metodos que no sean GET o POST

function methodMiddleware (req, res, next) {
    if(req.method === 'GET' || req.method === 'POST'){
        next();
    }else{
        return res.status(405).json({ message: 'Method not allowed.' });
    }
}

module.exports = methodMiddleware;