// Import the resources
const jwt = require('jwt-simple');
const moment = require('moment');
// Variable
var secret = 'clave_secreta_app';

const authenticate = {};
// Function to securitize
authenticate.ensureAuth = (req, res, next) => {
    if(!req.headers.authorization){
        res.status(403).send({message: 'Resquest without headers authorization'});
    }else{
        //First delete ' and ""
        var token = req.headers.authorization.replace(/['"]+/g,'');
        try {
            var payload = jwt.decode(token,secret);
            if(payload.exp <= moment().unix()){
                res.status(401).send({message: 'Token expired'});
            }
        }catch(err){
            res.status(404).send({message: 'Token not valid'});
        }
        req.user = payload;
        next();
    }
}

module.exports = authenticate;