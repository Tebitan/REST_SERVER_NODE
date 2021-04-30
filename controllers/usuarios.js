const { request, response } = require('express');


const usuariosGet = (req = request, res = response) => {

    //obtenemos los parametros en la URL ?a=1&b=2
    const query = req.query;

    res.json({
        msg: 'get API ',
        query
    });
}

const usuariosPost = (req = request, res = response) => {

    const body = req.body;

    res.json({
        msg: 'get Post ',
        body
    });
}

const usuariosPut = (req = request, res = response) => {
    const paramId = req.params.id;

    res.json({
        msg: 'get Put',
        paramId
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'get Delete'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}