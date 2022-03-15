// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só: 

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([elemento1,elemento2,elemnto3]) => {
    return [elemnto3,elemento2,elemento1]
}

console.log(swap(myList))