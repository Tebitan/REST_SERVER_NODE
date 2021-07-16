const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwtGenerator');


const login = async(req = request, res = response) => {
    const { email, password } = req.body;

    try {
        //verificar si el email existe
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos -email'
            });
        }
        //Si el usuario esta activo 
        if (!usuario.state) {
            return res.status(400).json({
                msg: 'El usuario esta Inactivo'
            });
        }
        //verificar password 
        const validPasswor = bcryptjs.compareSync(password, usuario.password);
        if (!validPasswor) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos -Password'
            });
        }
        //generar el JWT 
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el Administrador'
        });
    }
};


module.exports = {
    login

}