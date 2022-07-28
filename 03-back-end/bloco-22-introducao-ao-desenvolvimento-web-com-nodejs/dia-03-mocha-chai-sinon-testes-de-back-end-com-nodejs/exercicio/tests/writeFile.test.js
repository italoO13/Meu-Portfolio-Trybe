const { expect } = require("chai");
const fs = require('fs').promises;
const sinon = require('sinon');
const writeFile = require('../writeFile');


describe('Deve verificar se a função escreve conteudo em arquivo especifico', () => {
  // before(()=>{
  //   fs.writeFile.restore();
  // })

  describe('Caso seja recebido dois parametros do tipo string', () => {
    it('Verifica se funcao retorna ok quando os parametros é valido', async() => {
      sinon.stub(fs, 'writeFile').resolves('ok');
      const resultado = await writeFile('./texto.txt', 'conteudo');
      expect(resultado).to.be.equals('ok');
      fs.writeFile.restore();
    });
  });

  describe('Caso um dos parametros seja diferente de string', () => {
    it('Verifica se função retorna erro "parametros invalidos"', async () => {
      try {
        await writeFile(1,1);
      } catch (error) {
        expect(error).to.has.property('message');
        expect(error.message).to.be.equal('parametros invalidos');
      }
    });
  });

})