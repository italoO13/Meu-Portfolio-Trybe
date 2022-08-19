const express = require('express');
const routes = express.Router();
const routerUser = require('./user');

routes.use('/user', routerUser);

module.exports = routes;