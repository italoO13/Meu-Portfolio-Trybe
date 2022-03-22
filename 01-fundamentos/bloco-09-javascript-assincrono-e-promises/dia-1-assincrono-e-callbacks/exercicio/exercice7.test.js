const uppercase = require('./exercice7');

describe('Exercicio 7 ', () => {
    
    it('verifica se texto é transformado em uppercase', (done) => {
        uppercase('texto', (str) => {
            try {
                expect(str).toBe('TEXTO');
                done();
              } catch (error) {
                done(error);
              }
        });
    })

})
