const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter(name => name).join(' ');
  return {
    id, 
    firstName, 
    middleName,
    lastName,
    fullName
  }

}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name ,
    lastName: authorData.last_name,
  }
}

const findById = async (id) => {
  const [authorData] = await connection.execute(
  'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?',[id]
  );
}

const getAll= async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  return authors.map(serialize).map(getNewAuthor);
}

module.exports = {
  getAll,
}