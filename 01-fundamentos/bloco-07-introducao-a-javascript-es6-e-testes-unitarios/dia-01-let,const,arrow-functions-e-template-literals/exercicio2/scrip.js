
    // Crie uma função que receba um número e retorne seu fatorial.

    // Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
    // Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

//     const fatorial = (num) => {
//       let fatorial=1;
//       for(let index =num; index>=1;index-=1){
//         fatorial*=index;
//     }
//       return fatorial;
//   }

// console.log(fatorial(4));

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(4));

const fatorial = (number) => number > 1 ? number* fatorial(number-1) : 1;
console.log(fatorial(6));




// Crie uma função que receba uma frase e retorne qual a maior palavra.

// Exemplo:

const longestWord = (palavra) => {
  let array = palavra.split(" ");
  let maior= array[0];

  for (let index = 1; index< array.length;index+=1) {
    maior.length < array[index].length ? maior = array[index]:maior;
  }

  return maior;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'



// Crie uma página que contenha:

// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const botao = document.querySelector("button");
const contador = document.querySelector("p");

botao.addEventListener("click",()=>{
  contador.innerText = parseInt(contador.innerText) +1;
})



// Crie um código JavaScript com a seguinte especificação:

// Não se esqueça de usar template literals

//     Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
//     Exemplo:
//         String determinada: "Tryber x aqui!"
//         Parâmetro: "Bebeto"
//         Retorno: "Tryber Bebeto aqui!"
//     Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
//     Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
//     Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
//         JavaScript;
//         HTML; ... #goTrybe".

let texto= "bebeto"
const skills = ["HTML","CSS","JAVASCRIPT","GIT","COMUNICACAO"]
const substituirTexto = (texto) => (`Tryber ${texto} aqui!`)

const questao4 = (funcao1) => {




}

console.log(questao4(substituirTexto(texto)))
const skills = ["HTML","CSS","JAVASCRIPT","GIT","COMUNICACAO"]
let test;
for (let skill of skills) {
  console.log(`${skill}`)
}
console.log(test)