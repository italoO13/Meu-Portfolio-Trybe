const express = require('express');

express.use(express.json());


const PORT = 3000;

express.get('/', (req, res)=> {
  res.status(200).json({message: 'Está vivo !!'});
});


express.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`)
})