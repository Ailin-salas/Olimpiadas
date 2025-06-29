const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // ⭐ NUEVO: servir archivos estáticos desde /public

// Rutas
const usuariosRoutes = require('./routes/usuarios.routes');
const paquetesRoutes = require('./routes/paquetes.routes');
const reservasRoutes = require('./routes/reservas.routes');
const detallesRoutes = require('./routes/detalles.routes');
const carritoRoutes = require('./routes/carrito.routes');
const pagosRoutes = require('./routes/pago.routes');

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/paquetes', paquetesRoutes);
app.use('/api/reservas', reservasRoutes);
app.use('/api/detalles', detallesRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/pagos', pagosRoutes);

// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente :p');
});

module.exports = app;