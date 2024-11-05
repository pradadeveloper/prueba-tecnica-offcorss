const Cliente = require('../models/clienteModel');

// Controlador para crear un nuevo cliente
const crearCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.status(201).json({ mensaje: 'Cliente creado con éxito', cliente: nuevoCliente });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear cliente', error });
  }
};

module.exports = { crearCliente };