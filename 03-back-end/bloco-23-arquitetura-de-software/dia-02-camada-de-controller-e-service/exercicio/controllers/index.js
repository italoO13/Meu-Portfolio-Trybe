const express = require('express');
const ping = require('./ping');
const cep = require('./cep');

const routes = express.Router();

routes.use('/ping', ping);
routes.use('/cep', cep);


module.exports = routes;