const { Router } = require('express');
const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
} = require('../controllers/usuarios');

const route = Router();

route.get('/', usuariosGet);

//parmetreo en la ruta
route.put('/:id', usuariosPut);

route.post('/', usuariosPost);

route.delete('/', usuariosDelete);


module.exports = route;