const jwt = require('jsonwebtoken');

const generarJWT = (uid = '') => {
    //callback to promise 
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: process.env.TIMEEXPIREDTOKEN
        }, (err, token) => {
            if (err) {
                console.log('[JWT] ' + err);
                reject('No se pudo generar el token');
            } else {
                resolve(token)
            }

        });
    });
};

module.exports = {
    generarJWT
}