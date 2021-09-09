const validaJwt = require('../middlewares/validar-jwt');
const validaRoles = require('../middlewares/validar-roles');
const validaCampos = require('../middlewares/validarCampos');
const validaArchivo = require('../middlewares/validar-archivo');

module.exports = {
    ...validaJwt,
    ...validaRoles,
    ...validaCampos,
    ...validaArchivo
}