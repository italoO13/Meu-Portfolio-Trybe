const {question, questionFloat} = require('readline-sync')

const perguntaTexto = (texto) => {
  return question(texto);
}
const perguntaFloat = (texto) => {
  return questionFloat(texto);
}

module.exports = {
  perguntaTexto,
  perguntaFloat,
}