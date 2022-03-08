const {sum,myRemove,myFizzBuzz,encode,decode,techList,hydrate,searchEmployee} = require("./sum");

describe("Exercicio 1",()=>{
    it("Soma de 4 + 5 tem que ser 9",()=>{
        expect(sum(4,5)).toBe(9);
    });
    it("Soma de 0 + 0 tem que ser 0",()=>{
        expect(sum(0,0)).toBe(0);
    });
    it("retorna um erro quando tem string",()=>{
        expect(() => sum(4, '5')).toThrow(Error);
    });
    it("Verificar se a mensagem de erro é 'parameters must be numbers'",()=>{
        expect(()=>sum(4,"5")).toThrow("parameters must be numbers");

    });
});

describe("Exercicio 2",()=>{
    let arr = [1,2,3,4];
    it("Verifica se myRemove([1,2,3,4],3) retorna [1,2,4]",()=>{
        expect(myRemove(arr,3)).toEqual([1,2,4]);
    })
    it("Verifica se a chamada myRemove([1,2,3,4],3) não retorna [1,2,3,4]",()=>{
        expect(myRemove(arr,3)).not.toEqual([1,2,3,4]);
    });
    it("Verifica se a chamada myRemove([1,2,3,4],5) retorna [1,2,3,4]",()=>{
        expect(myRemove(arr,5)).toEqual([1,2,3,4]);
    });
});


describe("Exercicio 3",()=>{
    it("Faz a chamada de 15 e deve retornar 'fizzbuzz'",()=>{
        expect(myFizzBuzz(15)).toBe("fizzbuzz");
    });
    it("Faz uma chamada de 9 e deve retornar fizz",()=>{
        expect(myFizzBuzz(9)).toBe("fizz");
    });
    it("Faz uma chamada de 10 e deve retornar buzz",()=>{
        expect(myFizzBuzz(10)).toBe("buzz");
    });
    it("Faz uma chamada de 13 e deve retornar 13",()=>{
        expect(myFizzBuzz(13)).toBe(13);
    });
    if("Retorna falso quando a função é chamada por string 'texto'",()=>{
        expect(myFizzBuzz("texto")).toBeFalsy()
    });
});

describe("Exercicio 4",()=>{
    it("Verifica se encode e decode são funcões e deve retornar true",()=>{
        expect(typeof encode === "function" && typeof decode ==="function").toBeTruthy();
    });
    it("Testa se a,e,i,o,u são convertidos em 1,2,3,4,5",()=>{
        expect(encode("aeiou")).toEqual("12345");
    });
    it("Testa se os numeros 1,2,3,4e 5 sao convertidos em vogais a,e,i,o,u",()=>{
        expect(decode("1,2,3,4,5")).toEqual("a,e,i,o,u");
    });
    it("Verifica se 6,7,8,t,b retorna 6,7,8,t,b",()=>{
        expect(encode("678tb")).toEqual("678tb");
        expect(decode("678tb")).toEqual("678tb");
    });
    it("Verifica se encode e decode retornam o mesmo tamanho 6 para o parametro aeiou",()=>{
        expect(encode("aeiou")).toHaveLength(5);
    });
});

describe("Exercicio 5",()=>{

    describe('Testa a função techList', () => {
      it('Testa se a função techList é definida', () => {
        expect(techList).toBeDefined();
      });
      it('Testa se techList é uma função', () => {
        expect(typeof techList).toBe('function');
      });
      it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
        expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
          {
            tech: 'CSS',
            name: 'Lucas'
          },
          {
            tech: 'HTML',
            name: 'Lucas'
          },
          {
            tech: 'JavaScript',
            name: 'Lucas'
          },
          {
            tech: 'Jest',
            name: 'Lucas'
          },
          {
            tech: 'React',
            name: 'Lucas'
          }
        ]);
      });
      it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
        expect(techList([], 'Lucas')).toBe('Vazio!');
      });
    });
});

describe('Exercicio 6', () => {
    it('Testa se a função hydrate é definida', () => {
      expect(hydrate).toBeDefined();
    });
    it('Testa se hydrate é uma função', () => {
      expect(typeof hydrate).toBe('function');
    });
    it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
      expect(hydrate('1 cerveja')).toBe('1 copo de água');
      expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
      expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
      expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
      expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
  });

describe("Bonus 1",()=>{
    it("Verifica se searchEmployee foi definida",()=>{
        expect(searchEmployee).toBeDefined();
    });
    it("Verifica se searchEmployee é uma função",()=>{
        expect(typeof searchEmployee).toBe("function")
    });
});