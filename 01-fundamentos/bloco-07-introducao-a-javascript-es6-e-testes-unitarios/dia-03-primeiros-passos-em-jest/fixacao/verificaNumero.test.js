const numeros = require("./verificaNumero");

describe("Requisito 1", ()=>{
    it("A função recebe [1,2,3,4,5] e retorna true", ()=> {
        expect(numeros([1,2,3,4,5])).toEqual(true);
            // expect(true).toEqual(numeros([1,2,3,4,5]));
    
    })


});

describe("Requisito 2 ", ()=> {
    it("A função recebe [1,2,3,4,5] e retorna false",()=> {
        expect(numeros([1,2,3,4,"5"])).toBeFalsy()


    })
});

describe("Requisito 3 ", ()=> {
    it("A função recebe [ ] e retorna false",()=> {
        expect(numeros([" "])).toEqual(false)


    })
});

