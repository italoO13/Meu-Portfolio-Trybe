const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. 

const adicionaPropriedade = (objeto, chave, valor) => {
    objeto[chave] = valor;
    // return objeto;
}

adicionaPropriedade(lesson2,"turno","noite")

console.log(lesson2);


// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listaChaves = (objeto) => Object.keys(objeto);

console.log(listaChaves(lesson1))

// Crie uma função para mostrar o tamanho de um objeto. 

const tamanhoObjeto = (objeto) => Object.keys(objeto).length

console.log(tamanhoObjeto(lesson2))


// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. 

const listaValores = (objeto) => Object.values(objeto);

console.log(listaValores(lesson3))


// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: 

const objetoGeral = {};

const agrupaAula = (lesson) => {
    const tamanho = `lesson${Object.keys(objetoGeral).length +1}`;
    objetoGeral[tamanho]= Object.assign({},lesson)

}
agrupaAula(lesson1)
console.log(objetoGeral)
agrupaAula(lesson2)
console.log(objetoGeral)
agrupaAula(lesson3)
console.log(objetoGeral)


// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. 

const totalEstudante = (objeto) => {
    let total = 0;
    for (let lesson in objeto) {
        total+= objeto[lesson].numeroEstudantes
    }

    return total;
}

console.log(totalEstudante(objetoGeral))


// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: 

const getValueByNumber = (objeto,index) => {
  const chaves = Object.keys(objeto);
  return objeto[chaves[index]];

}
console.log(getValueByNumber(lesson1, 0));



// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: 

const verifyPair = (objeto,chave,valor) => {
  const booleanChave = Object.keys(objeto).includes(chave);
  const booleanValor = objeto[chave] === valor;
  return (booleanChave && booleanValor);

}

console.log(verifyPair(lesson1,"materia","Matemática"))

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));


// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5. 

const relatorioMatematica = (objeto) => {
  let alunoMatematica =0;
  for (let index in objeto) {
    if (objeto[index].materia==="Matemática") {
      alunoMatematica+= objeto[index].numeroEstudantes;
    }
  }
  return alunoMatematica;
}

console.log(relatorioMatematica(objetoGeral))


// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: 


const createReport = (objeto,professor) => {
  let resultado={
    professor:"Não Informado",
    aulas:[],
    estudantes:0};
  resultado.professor = professor;
  for(let index in objeto) {
    if (objeto[index].professor === professor) {
      resultado.aulas.push(objeto[index].materia);
      resultado.estudantes += objeto[index].numeroEstudantes;
    }

  }
  return resultado;
}

console.log(createReport(objetoGeral,"Maria Clara"))
