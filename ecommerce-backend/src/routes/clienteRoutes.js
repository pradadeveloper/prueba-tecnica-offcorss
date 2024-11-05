const express = require('express');
const { crearCliente } = require('../controllers/clienteController');
const router = express.Router();

router.post('/clientes', crearCliente);

module.exports = router;