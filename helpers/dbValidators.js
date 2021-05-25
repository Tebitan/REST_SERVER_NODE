const Role = require('../models/role');
const Usuario = require('../models/usuario');

const isValidRole = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${ rol } no està registrado en la BD`)
    }
};

const emailExist = async(email = '') => {
    const exisEmail = await Usuario.findOne({ email });
    if (exisEmail) {
        throw new Error(`El email ${ email } , ya está registrado en la BD`)
    }
};

const userExistForID = async(id = '') => {
    const existUser = await Usuario.findById(id);
    if (!existUser) {
        throw new Error(` No existe el usuario con  ID ${ id } `)
    }
};

module.exports = {
    isValidRole,
    emailExist,
    userExistForID
}