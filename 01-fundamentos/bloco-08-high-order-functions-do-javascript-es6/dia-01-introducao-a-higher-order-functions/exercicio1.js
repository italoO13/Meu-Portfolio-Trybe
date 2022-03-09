// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .


const contratado = (nome) => {
    let email = `${nome.toLowerCase().split(' ').join('_')}@trybe.com`
    return {nomeCompleto: nome, email: email}
}   


const newEmployees = (func) => {
    const employees = {
      id1: func('italo iveldo'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Alessandra Raysa'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  }; 

  console.log(newEmployees(contratado));

//   2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). 

const GeraNumAleatorio = (min,max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + Math.floor(min);
};

const checaResultado = (numeroAleatorio,aposta) =>{
    if (numeroAleatorio === aposta) {
        return true;
    }
        return false;
};

const resultado = (GeraNumAleatorio,aposta,checaResultado) => {
    const numeroAleatorio = GeraNumAleatorio(1,5);
    return checaResultado(numeroAleatorio,aposta)? 'Parabens, voce ganhou':'Tente novamente';
};


console.log(resultado(GeraNumAleatorio,3,checaResultado));


// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const verifica = (gabarito,estudante) => {
    if (gabarito === estudante) {
        return 1;
    } else if (estudante === 'N.A') {
        return 0;
    } else {
        return -0.5;
    }
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const teste = (gabarito,resposta_estudante,verifica) => {
    let soma =0;
    for (let index = 0; index< gabarito.length; index+=1) {
       soma += verifica(gabarito[index],resposta_estudante[index])
    };
    return soma;
};


console.log(teste(RIGHT_ANSWERS,STUDENT_ANSWERS,verifica))