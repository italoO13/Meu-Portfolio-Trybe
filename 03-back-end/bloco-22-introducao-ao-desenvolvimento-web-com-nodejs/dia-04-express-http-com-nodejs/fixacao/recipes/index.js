const express = require('express');
const {orderByName, returnobjId, returnName} = require('./funcs')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes', (_req, res) => {
  res.json(recipes);
})

app.get('/drinks', (_req, res) => {
  res.json(drinks);
});

app.get('/recipes/order', (req, res) => {
  const ordenacao = orderByName(recipes)
  res.json(ordenacao);
});
app.get('/drinks/search', (req, res) => {
  const {name} = req.query;
  const data = returnName(drinks, name);
  // if(!data) return res.status(404).json({message:'Não encontrado'})
  res.status(200).json(data);
})

app.get('/drinks/order', (req, res) => {
  res.json(orderByName(drinks));
});
app.get('/drinks/:id', (req, res) => {
  const {id} = req.params;
  const data = returnobjId(drinks, id);
  if(!data) return res.status(404).json({message: 'Drinks not Found!'});
  res.status(200).json(data);
})

app.put('/recipes/:id', (req, res) => {
  const {id} = req.params;
  const {name, price} = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));
  if(recipeIndex === -1) return res.status(404).json({message: 'Recipe not found!'});
  recipes[recipeIndex] = {...recipes[recipeIndex], name, price};
  res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const {name, price} = req.body;
  const drinksIndex = drinks.findIndex(obj => obj.id === Number(id));
  if(drinksIndex === -1) return res.status(404).json({message:'Deu ruim'});
  drinks[drinksIndex] = {id, name, price}
  res.status(204).end();

})

app.delete('/drinks/:id', (req, res) => {
  const {id} = req.params;
  const drinksIndex = drinks.findIndex((r) => r.id === Number(id));

  if (drinksIndex === -1) return res.status(404).json({ message: 'Drinks not found!' });

  recipes.splice(drinksIndex, 1);

  res.status(204).end();

});

app.get('/recipes/search', (req, res) => {
  const {name, max, min} =req.query;
  const data = returnName(recipes, name);
  if(!data) return res.status(404).json({message:'Não encontrado'})
  res.status(200).json(data.filter((obj) => obj.price<= max && obj.price>= min));
});

app.post('/recipes', (req, res) => {
  const {id, name, price, waitTime} = req.body;
  recipes.push({id, name, price, waitTime});
  res.status(201).json({message: 'Recipe Cread sucessfully'});
});

app.post('/drinks', (req, res ) => {
  const {id, name, price} = req.body;
  drinks.push({id, name, price});
  res.status(201).json({message:'Drinks add sucessfully'});
});

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
})

app.listen(3001, ()=> {
  console.log('Aplicação Rodando');
});

// fetch('http://localhost:3001/recipes', {
//   method: 'POST', 
//   headers:{
//     Accept:'application/json', 
//     'Content-type': 'application/json',
//   },
//   body: JSON.stringify({
//     id:4,
//     name:'Macarrão com Frango', 
//     price: 30
//   })

// })
