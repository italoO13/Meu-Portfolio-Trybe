// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

const a = 5
const b = 5


console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. 

let valor1= 10;
let valor2=15;

if (valor1<valor2){
    console.log("O maior valor é ", valor2);
}else{
    console.log("O maior valor é ",valor1);
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. 

valor1=30;
valor2=15;
let valor3=20;

if(valor1>valor2 && valor1>valor3){
    console.log("O maaior valor é ", valor1);
}else if (valor2>valor1 && valor2>valor3){
    console.log("O maior valor é, ",valor2)
}else{
    console.log("O maior valor é ",valor3)
}

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. 

const sta="teste";

switch(sta){
    case "positive":
        console.log("positive");
        break;
    case "negative":
        console.log("negative");
        break;
    default:
        console.log("Zero");
        break;
}

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 

const angulo1=60;
const angulo2=60;
const angulo3=-60;


if(angulo1<0 || angulo2<0 || angulo3<0 ){
    console.log("Erro, valor invalido");
}else{
    if (angulo1+angulo2+ angulo3 ===180){
        console.log(true)
    }else{
        console.log(false)
    }
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. 

let peca="Bispo";

peca = peca.toLowerCase();

switch (peca){
    case "bispo":
        console.log("Diagonal");
        break;
    case "peão":
        console.log("uma casa a frente");
        break;
    case "torre":
        console.log("Todas as casas retas pelas colunas ou fileiras");
    case "rainha":
        console.log("Todas as casas retas ou diagonais pelas colunas ou fileiras ");
        break;
    case "cavalo":
        console.log("Uma casa em direção em L");
        break;
    case "rei":
        console.log("Uma casa para qualquer lado");
        break;
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: 

const nota =65;

if (nota>100 || nota <0){
    console.log("Nota invalida");
}else{

    if (nota >= 90){
        console.log("A");
    } else if (nota >=80){
        console.log("B")
    } else if (nota >=70){
        console.log("C");
    } else if (nota >=60){
        console.log("D");
    } else if (nota >=50){
        console.log("E");
    } else {
        console.log("F");
    }



}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false . 

const par1 = 2;
const par2 =3;
const par3 =4;

if (par1 % 2===0 && par2 % 2===0 && par3 % 2===0){
    console.log("Todos são Pares");
}else{
    console.log("Um deles não é par")
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false . 

const impar1 = 3;
const impar2 =3;
const impar3 =5;

if (impar1 % 2!==0 && impar2 % 2!==0 && impar3 % 2!==0){
    console.log("Todos são impares");
}else{
    console.log("Um deles não é impar")
}

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. 

const custo = 500;
const venda = 1500;
const imposto= 0.2;

if (custo <0 || venda <0){
    console.log("Erro, custo ou venda menor que zero");
}else{
    let lucro = venda - custo*(1+imposto)
    console.log("O lucro foi de: ",lucro);
}

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. 

const salarioBruto = 3000;
let salarioBase;
let salarioLiquido ;


if (salarioBruto <= 1556.94){
    salarioBase=salarioBruto- 0.08*salarioBruto;
} else if (salarioBruto<=2594.90){
    salarioBase=salarioBruto- salarioBruto* 0.09;
}else if (salarioBruto<=5189.82){
    salarioBase=salarioBruto -salarioBruto* 0.11;
}else{
    salarioBase=salarioBruto- 570.88;
}

if (salarioBase <= 1903.98){
    salarioLiquido= salarioBase;
} else if (salarioBase<=2826.65){
    salarioLiquido= salarioBase  +(-salarioBase*0.075 + 142.80);
} else if (salarioBase<= 3751.05){
    salarioLiquido = salarioBase +(-salarioBase*0.15 + 354.80);
}else if (salarioBase<=4664.68){
    salarioLiquido= salarioBase + (-salarioBase*0.225 + 636.13);
}else{
    salarioLiquido = salarioBase + (-salarioBase*0.275 + 869.36)
}


console.log("Seu salário final é de : ",salarioLiquido);
