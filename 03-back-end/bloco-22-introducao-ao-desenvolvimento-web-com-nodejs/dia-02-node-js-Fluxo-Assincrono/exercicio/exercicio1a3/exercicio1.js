const exercicio1 = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      return reject(new Error('Informe apenas números'));
    }
    const result = (num1 + num2) * num3;
    if (result < 50 ) return reject(new Error('Valor muito baixo'));
    resolve(result);
  });
}

const numAleatorio = () => {
  return Math.floor(Math.random() *100 + 1);
}

const script1 = () => {
  const num1 = numAleatorio();
  const num2 = numAleatorio();
  const num3 = numAleatorio();

  exercicio1(num1, num2, num3)
    .then((result) => console.log(`Script1: O Resultado é ${result}`))
    .catch((err) => console.log(err.message));
}

const script2 = async() => {
  try {
    const num1 = numAleatorio();
    const num2 = numAleatorio();
    const num3 = numAleatorio();
    const result = await exercicio1(num1, num2, num3);
    console.log(`Script2: O resultado é ${result}`);
    
  } catch (err) {
    console.log(err.message)
  }
}

script1();
script2();