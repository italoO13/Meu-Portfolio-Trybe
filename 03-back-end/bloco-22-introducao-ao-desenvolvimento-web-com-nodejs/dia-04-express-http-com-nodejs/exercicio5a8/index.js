const express = require('express');
const fs = require('fs').promises;
const bodyParse = require('body-parser');

const readFile = async() => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  if(!data) throw new Error('Erro ao ler');
  return JSON.parse(data);
}

const readFileId = async(id) => {
  const data = await readFile();
  const person = data.find((obj) => obj.id === id);
  if(!person) throw new Error('simpson not found');
  return person;
}

const writeFile = async(id, name) => {
    const data = await readFile();
    const exists = data.find((obj) => obj.id === id)
    if(exists) throw new Error('id already exists');
    data.push({id, name})
    await fs.writeFile('./simpsons.json',JSON.stringify(data))
    console.log(data);
}


const app = express();
app.use(bodyParse.json());

app.get('/simpsons', async(_req, res) => {
  try {
    const data = await readFile();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({message:`${error.message}`})
  }
});

app.get('/simpsons/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const person = await readFileId(id)
    return res.status(200).json(person)
  } catch (error) {
    return res.status(404).json({message:`${error.message}`});
  }

});

app.post('/simpsons', async(req, res) => {
  try {
    const { id, name } = req.body;
    console.log(id)
    console.log(name)
    await writeFile(id, name);
    res.status(204).end();
  } catch (error) {
    return res.status(409).json({message:`${error.message}`});
  }

});

app.listen(3000, () => {
  console.log('Aplicação rodando perfeitamente');
})