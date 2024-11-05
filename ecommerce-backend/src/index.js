require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./config/database');
const clienteRoutes = require('./routes/clienteRoutes');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const authRoutes = require('./routes/authRoutes');
const Usuario = require('./models/clienteModel'); 
const bcrypt = require('bcrypt'); 
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3001;

// Habilita CORS para todas las solicitudes
app.use(cors());

// Middleware para analizar JSON
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Endpoint de registro de usuario
app.post('/api/register', async (req, res) => {
  const { nombre, email, telefono, contraseña } = req.body;

  try {
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

// Configuración de Apollo Server
const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app }); 

  // Rutas de autenticación y cliente
  app.use('/api', authRoutes);
  app.use('/api', clienteRoutes);

  // Inicio del servidor
  app.listen(port, () => {
    console.log(`Offcorss-App, escuchando en puerto ${port}`);
    console.log(`GraphQL listo en http://localhost:${port}${server.graphqlPath}`);
  });
};

// Iniciar Apollo Server
startServer();

// Controlador de errores
process.on('uncaughtException', (err) => {
  console.error('Error no capturado:', err);
  process.exit(1); 
});
