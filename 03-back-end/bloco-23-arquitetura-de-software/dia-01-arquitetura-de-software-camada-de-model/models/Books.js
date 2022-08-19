const connection = require('./connection');

const serialize = (book) => {
  const {title, author_id} = book;
  return {
    title,
    authorId: author_id,
  }
}

const getByAuthorId = async(id) => {
  const [books] = await connection.execute(
    `SELECT title, author_id FROM books
      WHERE author_id =?`, [id]);
  return books.map(serialize);
};

const getAll = async() => {
  const [books] = await connection.execute('SELECT title, author_id FROM books');
  return books.map(serialize);
};

const getBookById = async(id) => {
  const [books] = await connection.execute(`SELECT title, author_id FROM books
    WHERE id =?`, [Number(id)])
  console.log(books);
  if(!books) {
    return null;
  }
  return books.map(serialize)[0];
}

const isValid = async (title, author_id) => {
  if(!title || typeof title !== 'string' || title.length<3) return false;
  if(!author_id || !await getBookById(author_id)) return false;
  
  return true;
}

const addBook = async (title, author_id) => {
  const query = `INSERT INTO model_example.books (title, author_id) VALUE (? , ?)`;
  await connection.execute(query, [title, author_id]);
};

const controller = async(id) => {
  if(id) {
    return await getByAuthorId(id);
  }
  return await getAll();
}

module.exports = {
  controller,
  getBookById,
  isValid,
  addBook
}