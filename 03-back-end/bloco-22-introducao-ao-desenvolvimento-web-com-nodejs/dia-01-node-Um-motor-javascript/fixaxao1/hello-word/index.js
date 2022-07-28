const {question, questionInt} = require('readline-sync');

// console.log('Hello, Word!');

const name = question('QUal o seu nome ?');
const age = questionInt('Qual a sua idade ?');
console.log(`Hello, ${name}! You are ${age} years old!`);