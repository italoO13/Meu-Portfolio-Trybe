// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo. 

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };

  const battleMembers = { mage, warrior, dragon };

//   1 - Crie uma função que retorna o dano do dragão.

//   O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo)

const damage = (classe) => {
    const min = 15;
    const max = classe.strength;
    const dano = Math.floor(Math.random() * (max - min + 1)) + Math.floor(min);
    return dano;
};

// console.log(damage(dragon))

// 2 - Crie uma função que retorna o dano causado pelo warrior .

// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const danoWarrior = (classe) => {
    const min = classe.strength;
    const max = classe.strength * classe.weaponDmg;
    const dano = Math.floor(Math.random() * (max - min + 1)) + Math.floor(min);
    return dano;
}


// console.log(danoWarrior(warrior));

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const danoMage = (classe) => {
    const min = classe.intelligence;
    const max = classe.intelligence*2;
    let dano = Math.floor(Math.random() * (max - min + 1)) + Math.floor(min);
    if (classe.mana < 15) {
        dano = 'Não possui mana Suficiente';
        return {dano: dano, mana: 0}
    }
    const mana = classe.mana - 15;
    return {dano:dano, mana: mana}
    
};

// console.log (danoMage(mage))


//Parte 2

// 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior . 

const turnWarrior = (danoWarrior) => {
    const dano = danoWarrior(warrior);
    dragon.healthPoints = dragon.healthPoints - dano;
    warrior.damage = dano;
};

// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage. 


const TurnMage = (danoMage) => {
    const dano = danoMage(mage).dano;
    dragon.healthPoints = dragon.healthPoints - dano;
    mage.damage = dano;
    mage.mana -= danoMage(mage).mana;
};

// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.

const TurnDragon = (damage) => {
    const dano = damage(dragon);
    dragon.damage = dano;
    mage.healthPoints -= dano;
    warrior.healthPoints -=dano;
};

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno. 

const resultadoTurno = () => {
    console.log(battleMembers)
}

const gameActions = {
    turnWarrior:() => turnWarrior(danoWarrior),
    turnMage: () => TurnMage(danoMage),
    TurnDragon: () => TurnDragon(damage),
    resultadoTurno
};

gameActions.TurnDragon()
gameActions.turnWarrior()
gameActions.turnMage()
gameActions.resultadoTurno();