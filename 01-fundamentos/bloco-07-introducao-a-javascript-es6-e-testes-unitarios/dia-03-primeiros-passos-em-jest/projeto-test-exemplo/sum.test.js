const {mult,multiplicaPorDois} = require("./multiplicacao")

const sum = (a,b) => a + b;

test('soma dois valores', () => {
    expect(sum(2,3)).toEqual(5);
});

test("mult two values", ()=>{
    expect(mult(2,3)).toEqual(6);
})

multiplicaPorDois(2);
