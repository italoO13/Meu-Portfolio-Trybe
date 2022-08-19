const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(404).json({message:'pong'});

});

app.post('/hello', (req, res) => {
  const {name} = req.body
  res.status(404).json({"message": `Hello, ${name}`})
})

app.post('/greetings', (req, res) => {
  const {name, age} = req.body;
  if(age<=17) return res.status(404).json({'message':'Unauthorized'});
  res.status(200).json({message:`Hello, ${name}`})
});

app.put('/users/:name/:age', (req, res) => {
  const {name, age } = req.params;
  res.status(200).json({message:`seu nome é ${name} e vco tem ${age} anos`})

});

app.listen(3001, () => {
  console.log('Aplicação iniciada!');
})