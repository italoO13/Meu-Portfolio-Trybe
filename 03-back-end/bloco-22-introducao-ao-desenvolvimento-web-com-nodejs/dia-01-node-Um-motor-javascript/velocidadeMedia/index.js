// const velocidadeMedia = require('./velocidade');
// const adivinha = require('./adivinha');
const {questionInt}= require('readline-sync');

const script = questionInt(`Olá, escolha qual script será executado:
1-Velocidade
2-Advinha
3-Fatorial
4-Fibonaci`);

switch(script){
  case 1:
    require('./velocidade');
    break;
  case 2:
    require('./adivinha');
    break;
  case 3:
    require('./fatoriral');
    break;
  case 4:
    require('./fibonacci');
    break;
  default:
    console.log('Entrada invalida');

}
