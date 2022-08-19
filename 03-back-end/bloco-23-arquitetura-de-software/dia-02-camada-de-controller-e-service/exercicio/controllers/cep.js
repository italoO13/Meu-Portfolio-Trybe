const serviceCep = require('../services/cep');
const express = require('express');
const rescue = require('../shema/rescue');
const Joi = require('joi');

const route = express.Router();

route.get('/:cep', rescue(async (req, res) => {
  const {data, code, message, cd} = await serviceCep.getCepAll(req.params.cep);
  if(!data) {
    res.status(cd).json({errors:{code, message}});
  }
  res.status(cd).json(data[0]);
}));

route.post('/', rescue(async(req, res, next) => {
  const requiredNonEmptyString = Joi.string().not().empty().required();
  const {error} = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString, 
    bairro: requiredNonEmptyString, 
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2), 
  }).validate(req.body);

  if (error) return next(error);


  const {cd, code, message} = await serviceCep.PostCep(req.body);

  if(cd !== 200) {
    res.status(cd).json({error:{code, message}})
  }
  res.status(200).json(req.body);
}));


module.exports = route;