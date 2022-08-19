const express = require('express');
const rescue = require('../shema/rescue');

const route = express.Router();

route.use('/', rescue(async (req, res) => {
  res.status(200).json({message:"pong!"});
}));;


module.exports = route;