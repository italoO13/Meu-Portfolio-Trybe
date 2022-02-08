// 1 - Crie um objeto player contendo as variáveis listadas abaixo. 

let nome = "Marta";
let lastName = "Silva";
let age = 34;
let medals = {
    golden:2,
    silver:3
};

let objeto = {
    nome,
    lastName,
    age,
    medals
}

// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade". 

console.log("A jogadora "+ objeto.nome +" tem "+ objeto.age + " anos de idade");

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo. 

objeto["bestInTheWorld"]=[2006,2007,2008,2009,2010,2018];
console.log(objeto.datas);

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes". 

console.log("A jogadora "+ objeto.nome +" "+ objeto.lastName + " "+ "foi eleita a melhor do mundo por " + objeto["bestInTheWorld"].length +" vezes.")

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata". 

console.log("A jogadora possui " + objeto.medals.golden.length + " medalhas de ouro e "+ objeto.medals.silver.length +" medalhas de prata")