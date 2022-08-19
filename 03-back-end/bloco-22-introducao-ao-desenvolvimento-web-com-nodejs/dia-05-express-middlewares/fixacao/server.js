const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helloRouter = require('./helloRouter');

app.use(bodyParser.json());

app.use('/', helloRouter)

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });