const express = require('express');
const routes = require('./controllers/index');

const app = express();
app.use(express.json());
app.use(routes);
app.use((err, req, res, next) => {
  console.log(err);

  if(err.isJoi) {
    return res.status(400).json({error:{message: err.details[0].message}});
  }

  return res.status(500).json({message:'Erro no servidor'});
})

app.listen(3000, ()=>{
  console.log('Aplicação rodando na porta 3000');
});