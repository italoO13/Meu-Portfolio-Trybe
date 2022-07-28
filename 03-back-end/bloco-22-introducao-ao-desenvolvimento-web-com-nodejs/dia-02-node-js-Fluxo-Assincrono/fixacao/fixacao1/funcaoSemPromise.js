const calculaDivisao = (num1, num2) => {
  if(num2 === 0) throw new Error('Não pode ser feito uma divisão por zero');

  const resultado = num1/num2

  return resultado;
}

try {
  
  const result = calculaDivisao(2,0)
  console.log(result);
} catch (error) {
  console.log(error.message)
}
