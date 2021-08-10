const { request } = require('express');
const { Producto } = require('../models');
const Categoria = require('../models/categoria');
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

const existeCategoriaForID = async(id = '') => {
    const categoria = await Categoria.findById(id);
    if (!categoria) {
        throw new Error(`La categoria con ID ${ id } No existe`)
    }
};

const existeCategoriaForName = async(name = '') => {
    name = name.toUpperCase();
    const categoria = await Categoria.findOne({ name });
    if (categoria) {
        throw new Error(`La categoria ${ categoria.name } ya existe`)
    }
};

const existeProductoForID = async(id = '') => {
    const producto = await Producto.findById(id);
    if (!producto) {
        throw new Error(`El producto con ID ${ id } No existe`)
    }
};

const existeProductoForName = async(name = '') => {
    name = name.toUpperCase();
    const producto = await Producto.findOne({ name });
    if (producto) {
        throw new Error(`El producto ${ producto.name } ya existe`)
    }
};


module.exports = {
    isValidRole,
    emailExist,
    userExistForID,
    existeCategoriaForID,
    existeCategoriaForName,
    existeProductoForID,
    existeProductoForName
}