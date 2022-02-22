let cars =["sab", "volvo","bmw"];



//usando for in
for (let index in cars){
    console.log(cars[index]);
}

// Usando for on

for (let index of cars){
    console.log(index);
}

// Resumindo: O for in vai retonar para o for o indice de cada elemento do objeto, já o for on vai retornar o proprio elemento do objeto;

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

// for (let valor of car){  Não funcionou ? Pq ?)
//     console.log(valor);
// }

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão. 

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };


for (let index in names){
    console.log("Olá " + names[index])

}


// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto. 

car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let key in car ){
    console.log(key, car[key]);
}

