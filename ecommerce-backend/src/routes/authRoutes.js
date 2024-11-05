const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const Usuario = require('../models/clienteModel');

// Endpoint de autenticación
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifica si el usuario existe en la base de datos
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Compara la contraseña proporcionada con la almacenada en la base de datos
    const isPasswordValid = await bcrypt.compare(password, usuario.contraseña);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Generar un token JWT
    const token = jwt.sign(
      { id: usuario._id, email: usuario.email, nombre: usuario.nombre },
      process.env.SECRET_KEY, // Reemplaza 'secret_key' con una variable de entorno
      { expiresIn: '1h' }
    );

    // Envia el token como respuesta
    res.json({ token });
  } catch (error) {
    console.error('Error al autenticar al usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Endpoint de registro
router.post('/register', async (req, res) => {
  const { nombre, email, telefono, contraseña } = req.body;

  try {
    // Verificar si el correo ya está registrado
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Crear un nuevo usuario
    const nuevoUsuario = new Usuario({
      nombre,
      email,
      telefono,
      contraseña: hashedPassword,
    });

    // Guardar el usuario en la base de datos
    await nuevoUsuario.save();
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
});

module.exports = router;