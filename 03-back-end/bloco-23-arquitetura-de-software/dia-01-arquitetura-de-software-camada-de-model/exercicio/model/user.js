const connection = require('./connection');

const addUser = async({firstName, lastName, email, password}) => {
  const add = await connection.execute(
    `INSERT INTO exercicioModel.user (first_name, last_name, email, password)
      VALUES(?,?,?,?)
    `, [firstName, lastName, email, password])
    return {id:add[0].insertId, firstName, lastName, email, password};
};

const getAll = async() => {
  const [response] = await connection.execute('SELECT id, first_name, last_name, email FROM exercicioModel.user');
  if(!response) {
    return [];
  }
  return response;
}

const getUserById = async(id) => {
  const [response] = await connection.execute('SELECT id, first_name, last_name, password, email FROM exercicioModel.user WHERE id=?',[id]);
  if(!response) {
    return null;
  }
  return response[0];
}

const EditUser = async(id, {firstName, lastName, email, password}) => {
  const response = await connection.execute(`UPDATE exercicioModel.user 
  SET first_name = ?, last_name = ?, email = ?,password = ? WHERE id=?`,[firstName, lastName, email, password, id]);
  if(!response) {
    return null;
  }
  return {id, firstName, lastName, email, password}
}

module.exports = {
  addUser,
  getAll,
  getUserById,
  EditUser
}