const { Router } = require('express');
const { check } = require('express-validator');
const { login, googleSignin } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validarCampos');

const route = Router();
route.post('/login', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(), validarCampos
], login);

route.post('/google', [
    check('id_token', 'El id_token es obligatorio').not().isEmpty(), validarCampos
], googleSignin);


module.exports = route;