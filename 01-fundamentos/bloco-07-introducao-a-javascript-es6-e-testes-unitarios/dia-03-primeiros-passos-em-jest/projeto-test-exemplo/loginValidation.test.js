const {
    greetingMessage,
    loginErrorMessage,
    verifyCredentials,
} = require ("./loginValidation.js")


describe("a função sera testada é a verifyCredentials",()=>{
    it("VerifcaCrendetials() vê se caso os valores estao correto a função funciona", ()=>{
        const user = {
            userName: "bob",
            password: 123456
        }

        const {userName, password} = user;

        expect(verifyCredentials({userName, password})).toBe(
            "Hello, Joana! Que bom ter você de volta"
        );
    });

    it("greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`", () => {
        expect(greetingMessage("Lucas")).toBe(
          "Hello, Lucas! Que bom ter você de volta"
        );
      });
    
      it("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
        expect(loginErrorMessage("Bob")).toBe(
          "Pessoa usuária 'Bob' não encontrada, tente novamente!"
        );
      });  

})