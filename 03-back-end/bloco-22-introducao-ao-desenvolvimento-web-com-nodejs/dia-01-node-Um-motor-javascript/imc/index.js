const imc = require('./calculoImc');
const {perguntaFloat, perguntaTexto} = require('./perguntas')

const nome = perguntaTexto('Qual o seu nome ?');
const peso = perguntaFloat('Qual o seu peso ?');
const altura = perguntaFloat('Qual a sua altura ?');

const {imcValor, classificao } = imc(peso, altura);

console.log(`Olá ${nome}, seu imc é igual a ${imcValor} classificado como ${classificao}`);