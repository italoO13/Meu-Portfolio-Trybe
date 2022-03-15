// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. 

const sum = (...numeros) => {
    return numeros.reduce((acc, num) => acc + num
    ,0)}

console.log(sum(1,2,7))