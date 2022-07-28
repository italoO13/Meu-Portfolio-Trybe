
const { expect } = require('chai');
const validaNum = require('../validaNum');

describe('Valida número - Exercicio 1', () => {

  describe('Caso seja recebido um número como parametro', () => {
    it('Verifica se parametro é um numero', () => {
      const resultado = validaNum(5);
      expect(resultado).to.be.a('string');
    });

    it('Verifica quando o número é menor que zero é retornado "menor que 0"', () => {
      const resultado = validaNum(-5);
      expect(resultado).to.be.equal('menor que 0');
    });

    it('Verifica quando o número é maior que zero se é retornado "maior que 0"', ()=>{
      const resultado = validaNum(5);
      expect(resultado).to.be.equal('maior que 0');
    });

    it('Verifica quando o número é igual a zero se é retornado "igual a 0"', ()=>{
      const resultado = validaNum(0);
      expect(resultado).to.be.equal('igual a 0');
    });

  });
  describe('Caso não seja recebido um número como parametro', () => {
    it('Deve ser recebido um erro informado que o parametro é invalido', () => {
      try {
        const resultado = validaNum('não é um número');
      } catch (error) {
        expect(error).to.has.property('message');
        expect(error.message).to.be.equal('parametro é invalido')
      }
    });
  })

})