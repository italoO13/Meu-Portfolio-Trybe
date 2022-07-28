const {questionInt} = require('readline-sync');

const numAleatorio = () => {
  return Math.random()*10
}

const validaNum = (numAle, numEsc) => {
  if(numAle === numEsc) {
    return () => console.log('Parabéns, número correto')
  }
    return () => {
      console.log('Não foi dessa vez, o numero e ', numAle);
      script();
    }
}

const numEscolhido = () => questionInt('Qual o número escolhido ?')

const script = () => {
  const numE = numEscolhido()
  const validaN = validaNum(numAleatorio(), numE)
  return validaN();
}

script();

module.exports= script;