
//  1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
//  Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
//  Dicas: 

function confere(n){
    let romano={
        rom: ["I","V","X","L","C","D","M"],
        num: [1,5,10,50,100,500,1000]
    }
    let numRomano = n.split("")
    let transformacao=[];
    for(let index in numRomano){
        for(let index2 in romano.rom){
            if (numRomano[index]===romano.rom[index2]){
                transformacao[index]=romano.num[index2];
            }
        }
    }
    return transformacao;
}

function soma(n){
    let transformacao = confere(n);
    let resultado =0;
    if (transformacao.length===1){
        return resultado= transformacao[0];

    }
    for (let i=1; i<transformacao.length; i+=1){
        if (transformacao[i-1]<=transformacao[i]){
            resultado+=-transformacao[i-1]+ transformacao[i];
        }else{
            resultado+= transformacao[i-1]+ transformacao[i];
        }

    }

    return resultado;

}

console.log(soma("VI"))

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função. 

let vector  = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector){
    let aux = [];
    for (let index in vector){
        for (let index2 in vector[index]){
            if (vector[index][index2]%2===0){
                aux.push(vector[index][index2]);
            }
        }
    }

    return aux;
}

console.log(arrayOfNumbers(vector));


// 3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  const result ={};

  for ( let index=0; index< basket.length;index+=1){
    const fruit = basket[index];
    if (result[fruit]===undefined){
        result[fruit]=1;
    }else{
        result[fruit]+=1;
    }

  }
  msg="Sua cesta possui: ";
  for (let key in result){
      msg= msg + result[key] + " " + key + ", "
  }


  console.log(msg)



//   Usando o objeto abaixo, faça os exercícios a seguir: 

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };


//   4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101". 

let ultimoMorador=moradores["blocoDois"][moradores["blocoDois"].length-1]

console.log("O morador do bloco 2 de nome "+ultimoMorador.nome+" "+ultimoMorador.sobrenome+" mora no "+ultimoMorador.andar+" andar apartameto "+ultimoMorador.apartamento);


// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2. 

for(let index in moradores){
    console.log("moradores do :"+index);
    for(let index2 in moradores[index]){
        console.log("morador ",parseInt(index2)+1);
        console.log(moradores[index][index2]["nome"]+" "+moradores[index][index2]["sobrenome"]);
    }
}