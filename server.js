const express = require('express');
const db = require('./config/database');

const paquetesRoutes = require('./routes/paquetes.routes');
const usuariosRoutes = require('./routes/usuarios.routes');
const loginRoutes =  require('./routes/login.routes');
const reservasRoutes  = require('./routes/reservas.routes');
const detallesRoutes = require('./routes/detalles.routes');
const carritoRoutes = require('./routes/carrito.routes');
const pagoRoutes = require('./routes/pago.routes');

const cors = require('cors');

require('dotenv').config();

const bdConnection = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/paquetes', paquetesRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/reservas', reservasRoutes);
app.use('/api/detalles', detallesRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/pagos', pagoRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('🚀 API funcionando correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});
