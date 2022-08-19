const {expect} = require('chai');
const sinon = require('sinon');
const model = require('../../models/movieService');
const service = require('../../services/movieModel');

const MoviesService = {
  create: () => {}
};

describe('Insere um novo filme no DB', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.have.a('boolean');
    });
    it('o boolean contém "false"',async ()=>{
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.equal(false);
    });
  });
  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }
    before(() =>{
      const ID = 1;
      sinon.stub(model, 'create').resolves({id:ID})

    })
    after(() => {
      MoviesModel.create.restore();
    });
    it('retorna um objeto', async() => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.a('object');
    });
    it('retorna um objeto com a propriedade id', async() => {
      const response = await MoviesService.create(payloadMovie);
      expect(response).to.be.have('id');
    })
  });
});