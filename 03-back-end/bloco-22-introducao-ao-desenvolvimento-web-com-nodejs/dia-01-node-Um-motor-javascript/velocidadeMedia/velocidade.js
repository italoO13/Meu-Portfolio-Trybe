const {questionFloat} = require('readline-sync');

const distancia = questionFloat('QUal a distancia ?');
const tempo = questionFloat('Qual o tempo ?')

const velocidadeMedia = (distancia, tempo) => {
  return distancia/tempo
}

console.log(`Sua velocidade média é de ${velocidadeMedia(distancia, tempo)}`)


module.exports = velocidadeMedia;