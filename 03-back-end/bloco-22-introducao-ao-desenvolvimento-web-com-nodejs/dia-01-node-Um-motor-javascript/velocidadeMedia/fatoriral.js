const {questionInt} = require('readline-sync');

const question = () => questionInt('Escolha o numero');

const script = () => {
  const num = question();
  let fat = 1;
  if(num <= 0) {
    return console.log('Numero ínvalido');
  }
  for(let i = num; i> 1 ; i-= 1) {
    fat = fat * (i)
  }
  console.log(`A sequencia de fibonati é ${fat}`);

}

script();