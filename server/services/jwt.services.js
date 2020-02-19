const jwt = require('jwt-simple');
const moment = require('moment');

var secret = 'clave_secreta_app';

const jwtService = {};

jwtService.createToken = (user) =>{
    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        dni:  user.dni,
        email: user.email,
        role: user.role,
        tlf: user.tlf,
        transport: user.transport,
        discharge_date: user.discharge_date,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };
    return jwt.encode(payload,secret);
}

module.exports = jwtService;