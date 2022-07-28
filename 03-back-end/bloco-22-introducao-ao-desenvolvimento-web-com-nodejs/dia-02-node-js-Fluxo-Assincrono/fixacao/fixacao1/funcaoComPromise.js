const calculaDivisao  = (num1, num2) => {
  const promise = new Promise((resolve, reject) => {
    if(num2 ===0) reject(new Error('Erro na promisse'));
    const result = num1/num2
    resolve(result);
  })

  return promise;
}


calculaDivisao(2,2)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));