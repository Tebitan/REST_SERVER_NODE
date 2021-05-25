const { Schema, model } = require('mongoose');


const UsuarioSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo electronico es obligatorio']

    },
    password: {
        type: String,
        required: [true, 'La clave es obligatorio']
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

/**
 * Sobrescribimos la funcion toJSON 
 * Para eliminar atributos que no queremos mostrar 
 * por EJ: password
 */

UsuarioSchema.methods.toJSON = function() {
    const { __v, password, ...usuario } = this.toObject();
    return usuario;
};



module.exports = model('Usuario', UsuarioSchema);