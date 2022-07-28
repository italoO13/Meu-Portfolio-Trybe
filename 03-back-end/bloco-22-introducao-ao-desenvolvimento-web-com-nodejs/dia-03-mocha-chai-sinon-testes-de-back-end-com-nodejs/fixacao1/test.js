const { expect } = require('chai');
const fs = require('fs').promises;
const sinon = require('sinon');
const readFile = require('./readFile');
const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';



describe('Ler Arquivo', () => {
  describe('Quando o arquivo existe', async()=> {
    before(() => {
      sinon.stub(fs, 'readFile').returns(CONTEUDO_DO_ARQUIVO);
    })

    after(() => {
      fs.readFile.restore();
    })

    describe('a resposta', async() => {
      const resposta = await readFile('arquivo.txt');
      
      
      it('é uma string', ()=>{
        expect(resposta).to.be.a('string');

      });

      it('é igual ao conteudo do arquivo', () => {
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO)
      });
    })
  });
  describe('Quando o arquivo não existe', async() => {
    before(() => {
      sinon.stub(fs, 'readFile').throws(new Error('Arquivo não encontrado'));
    })
    after(() => {
      fs.readFile.restore();

    })

    describe('A resposta, ', () => {
      it('retorna um erro', async() => {
        const resposta = await readFile('arquivo_que_nao_existe.txt');
        expect(resposta).to.be.equal(null);  
      });
    });
  });



});