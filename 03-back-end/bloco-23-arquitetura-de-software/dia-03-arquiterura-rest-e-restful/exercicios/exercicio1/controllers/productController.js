const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if(!product) {
    res.status(404).json({message:'Not found'})
  }

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if(!name || !brand) {
    return res.status(422).json({message:"Informanção faltando"})
  }

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if(!products) {
    return res.status(404).json({message:"Not found"})
  }

  res.status(200).json(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  if(!name || !brand ) {
    return res.status(404).json({message:"Not found"})
  }

  const product = await ProductModel.getById(req.params.id);
  if(!product) {
    return res.status(404).json({message:"Not found"})
  }

  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json(products);
});

module.exports = router;