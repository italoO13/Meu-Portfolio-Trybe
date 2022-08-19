const express = require('express');
const Author = require('./models/Author');
const Books = require('./services/books');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyparser.json());
app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});


app.get('/books', async(req, res) => {
  const {author_id} = req.query;
  const books = await Books.controller(author_id);
  res.status(200).json(books);
});

app.get('/books/:id', async(req, res) => {
  const {id} =req.params;
  const book = await Books.getBookById(id);
  if(!book) {
    res.status(400).json({message:'Not Found'})
  }
  res.status(200).json(book);
});

app.post('/books', async(req, res) => {
  console.log(req.body);
  const { title, author_id } = req.body;
  const status = await Books.isValid(title, author_id);
  if(!status) {
    return res.status(400).json({message:'Dados Inválidos'})
  }
  await Books.addBook(title, author_id);
  res.status(201).json({message: 'Livro criado com sucesso'});
});


app.listen(port, () => {
  console.log('Rotando na porta 3000')
})