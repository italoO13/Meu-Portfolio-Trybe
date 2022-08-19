const express = require('express');

const app = express();


app.get('/hello', handleHello);

app.get('/', (_req, res) => {
  res.send({html:'<h1>Inicio</h1>'})
});


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

function handleHello (req, res)  {
  res.status(200).send('Hello World!');

}