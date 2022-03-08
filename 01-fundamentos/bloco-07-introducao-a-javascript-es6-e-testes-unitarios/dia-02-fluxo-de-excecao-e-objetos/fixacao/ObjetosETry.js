
const verificaObjeto = (objeto) => {
    if (typeof(objeto)!=="object") {
        throw "Não é um objeto";
    }
}

const novaPropriedade = (objeto,chave,valor) => {
    try{
        verificaObjeto(objeto);
        objeto[chave]= valor;
        return "objeto";
        
    }catch(erro) {
         throw erro;
    }
    
}

// const customer = {
//     firstName: "Roberto",
//     age: 22,
//     job: "Teacher"
// }
const customer= "É uma string"

console.log(novaPropriedade (customer,"sex","male"));
