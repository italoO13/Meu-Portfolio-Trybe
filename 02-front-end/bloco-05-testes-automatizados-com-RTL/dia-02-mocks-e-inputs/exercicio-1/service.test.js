const { test } = require('@jest/globals')
const service = require('./service')

describe('questao1', ()=> {
  test("verificase a função retorna o valor esperado", ()=> {
    service.question1 = jest.fn().mockReturnValue(10)
    expect(service.question1()).toBe(10);
    expect(service.question1).toHaveBeenCalled()
    expect(service.question1).toHaveBeenCalledTimes(1)
  });

  test("Informa uma nova função", () => {
    service.question1 = jest.fn().mockImplementation((a, b) => a/b)
    expect(service.question1(2,2)).toBe(1);
    expect(service.question1).toHaveBeenCalledTimes(1);
    expect(service.question1).toHaveBeenCalledWith(2,2)
  });

  test("Cria uma função com tres parametros no mock", () => {
    service.question1 = jest.fn().mockImplementation((a,b,c) => a*b*c);
    expect(service.question1(2,2,2)).toBe(8);
    expect(service.question1).toHaveBeenCalled();
    expect(service.question1).toHaveBeenCalledTimes(1)
  })
  test("Cria uma função que recebe um parametro e retorna o dobro", () => {
    service.question1.mockReset()
    expect(service.question1).toHaveBeenCalledTimes(0);
    service.question1 = jest.fn().mockImplementation((a) => a*2)
    expect(service.question1(2)).toBe(4);
    expect(service.question1).toHaveBeenCalledTimes(1)
  })

})

describe("strings", () => {
  test("Muda função para retornar string em caixa baixa", () => {
    jest.spyOn(service, "StringUpperCase" ).mockImplementation(a => a.toLowerCase());    
    expect(service.StringUpperCase('ITALO')).toBe('italo');
    expect(service.StringUpperCase).toHaveBeenCalled();
  });
  test("Muda função para retorna ultima letra", () => {
    service.StringFirstLetter = jest.fn().mockImplementation((string) => string[string.length -1] );
    expect(service.StringFirstLetter('italo')).toBe('o');
    expect(service.StringFirstLetter).toHaveBeenCalled();
  })
  test("Recebe tres strings e concatena-as", ()=> {
    service.StringConc = jest.fn().mockImplementation((string1,string2, string3) => string1 + string2 + string3);
    expect(service.StringConc('i','ta','lo')).toBe('italo');
    expect(service.StringConc).toHaveBeenCalled();
  });
  test("Restaura a implementacao da primeira func", () => {
    service.StringUpperCase.mockRestore();
    expect(service.StringUpperCase('italo')).toBe('ITALO');
  })

});

describe("Trabalhando com APi", () => {
  service.fetchDog = jest.fn()
  afterEach(service.fetchDog.mockReset)

  test("Verifica em caso de sucesso", async()=>{
    jest.spyOn(, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue('request sucess')
    })

    // await service.fetchDog();
    // expect(service.fetchDog).toHaveBeenCalled();
    // expect(service.fetchDog).toHaveBeenCalledTimes(1);
    // await expect(service.fetchDog()).resolves.toBe("request sucess");
    })

})