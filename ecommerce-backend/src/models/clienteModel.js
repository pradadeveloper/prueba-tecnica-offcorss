const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
}, {
  collection: 'clientes'
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;