const express = require('express');
const { Store } = require('./models');

const app = express();

app.use(express.json());


app.get("/", async(req, res) => {
  const stores = await Store.findAll();
  res.status(200).json(stores);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
})