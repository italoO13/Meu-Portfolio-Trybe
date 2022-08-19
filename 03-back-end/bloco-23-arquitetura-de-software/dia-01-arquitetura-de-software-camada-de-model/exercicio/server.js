const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
  res.status(400).json({message: err.message});
})

app.listen(3000, ()=> {
  console.log('iniciado na porta 3000');
})