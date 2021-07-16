const validaJwt = require('../middlewares/validar-jwt');
const validaRoles = require('../middlewares/validar-roles');
const validaCampos = require('../middlewares/validarCampos');

module.exports = {
    ...validaJwt,
    ...validaRoles,
    ...validaCampos
}