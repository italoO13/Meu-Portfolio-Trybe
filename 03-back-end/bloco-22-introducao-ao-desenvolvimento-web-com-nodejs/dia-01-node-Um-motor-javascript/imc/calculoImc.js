const imc = (peso, altura) => {
  const imcValor = calculaImc(peso, altura);
  const classificao = classificaoImc(imc)
  return {imcValor, classificao}
}

const calculaImc = (peso, altura) => {
  return peso/Math.pow(altura,2);
}

const classificaoImc = (imcV) => {
  if(imcV < 18.5) {
    return 'Abaixo do peso (magreza)'
  }
  if(imcV <= 14.5) {
    return 'Peso normal';
  }
  if(imcV <= 29.9) {
    return 'Acima do peso (sobrepeso)';
  }
  if(imcV <= 34.9) {
    return 'Obesidade grau 1'
  }
  if(imcV <= 39.9) {
    return 'Obesidade grau 2'
  }
  return 'Obesidade graus 3 e 4'
}

module.exports = imc;