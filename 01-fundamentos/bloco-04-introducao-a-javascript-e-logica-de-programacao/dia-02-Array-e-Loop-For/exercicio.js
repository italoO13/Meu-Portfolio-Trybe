// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers= [5,9,3,19,70,8,100,2,35,27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; 

for (let numeros of numbers){
    console.log(numeros);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 
let soma = 0;
for(let i =0 ; i< numbers.length; i+=1){
    soma= soma+ numbers[i];
}
console.log(soma);


// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; 
let media=soma/numbers.length
console.log(media);


// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; 

if (media>20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor menor que 20");
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o; 

let aux =0;

for(let i=0; i< numbers.length;i+=1){
    if (numbers[i]>aux){
        aux= numbers[i];
    }

}

console.log("O maior número é: ",aux);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 

aux=0
for (let num of numbers){
    if(num%2!=0){
        aux+=1;
    }
}

console.log("Existem ",aux," impares");

// Utilizando for , descubra qual o menor valor contido no array e imprima-o; 

aux=numbers[0];
for(let num of numbers){
    if(num<aux){
        aux=num;
    }

}
console.log("O menor valor é: ",aux);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; 

let exercicio8=[];

for(i=0;i<25;i+=1){
    exercicio8[i]=i+1;
}
console.log(exercicio8);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . 

for(let num of exercicio8){
    console.log(num/2);
}