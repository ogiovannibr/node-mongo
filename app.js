const express = require('express');
const app = express();

app.use(express.json());

const clienteRoutes = require('./rotas/clienteRoutes');
const exameRoutes = require('./rotas/exameRoutes');

app.use(clienteRoutes);
app.use(exameRoutes);

module.exports = app;