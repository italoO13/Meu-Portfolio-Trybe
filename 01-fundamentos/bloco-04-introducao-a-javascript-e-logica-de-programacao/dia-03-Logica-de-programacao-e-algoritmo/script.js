

/*    
Ainda não conseguir fazer e o 4 e 5 -Bonus



*/


// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. 



function fatorial(num){
    
let fatorial=1;
    if (num<=0){
        return
    }else{

        for (let i=0;i<num;i+=1){
            fatorial=fatorial* (num-i);

        }
        return console.log("O fatorial é: ",fatorial);
    }
}

fatorial(10)


// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. 

function inverte(palavra){
    let aux="";
    for (let i=palavra.length-1; i>0;i--){
        aux+= palavra[i];
    }

    return console.log(aux);
}
inverte("trybe");


// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. 

let array = ['java', 'javascript', 'python', 'html', 'css'];

function maior(lista){
    let aux="";
    for (let i=0;i<lista.length;i+=1){
        if (aux.length<lista[i].length){
            aux=lista[i];
        }


    }

    return console.log("A palavra maior é :", aux, ", e seu tamanho é :",aux.length)


}



function menor(lista){
    let aux=lista[0];
    for (let i=1;i<lista.length;i+=1){
        if (aux.length>lista[i].length){
            aux=lista[i];
        }


    }

    return console.log("A palavra menor é :", aux, ", e seu tamanho é :",aux.length);


}
maior(array);
menor(array);



// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. 

let primo = [];

for(let i=0; i<=50;i+=1){
    primo[i]=i
}


function maiorPrimo(lista){
let contador;
let valor=0;
for (let i=0; i<primo.length;i+=1){
    contador=0
        for(let j=0;j<primo.length;j+=1){
        
            if(primo[i]%primo[j]==0){
                contador+=1;
            }

            if(contador>2){
                break;
            }

    }
    if(contador<=2){
        if(valor<primo[i]){
            valor=primo[i];
        }
    }



}
    console.log(valor);
}

maiorPrimo(primo)



/**********************BONUS ***************************/

// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: 

function quadrado(n){
    let linha;
    for(let i=0;i<n;i+=1){
        linha="";
        for(let j=0;j<n;j+=1){
            linha+="*"


        }
        console.log(linha)
}
}


quadrado(5)


// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: 

function triângulo(n){
    let linha;
    for(let i=0;i<n;i+=1){
        linha=""
        for(let j=0;j<=i;j+=1){
            linha+="*"

        }
    console.log(linha);
}
}


triângulo(5)

// 3- Agora inverta o lado do triângulo. Por exemplo: 


function trianguloInvertido(n){
    let linha="";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    for (let i=0; i<n;i+=1){
        linha=""
        for (let j=0;j<n;j+=1){
            if(n-i-1<=j){
                linha+="*"
            }else{
                linha+=" "
            }


        }
        console.log(linha);
    }

}

trianguloInvertido(5)

// 4- Depois, faça uma pirâmide com n asteriscos de base: 

function arvoreNatal(n){
    let linha ="";
    for(let i=0;i<n;i+=1){
        for(let j=0; j<n; j+=1){

        }
    }
}




//6- Faça um programa que diz se um número definido numa variável é primo ou não. 

function numeroPrimo(n){
    let primo=0;
    for (let i=1; i<=n; i+=1){
        if(n%i==0){
            primo +=1;
        }

    }

    if(primo>2){
        console.log("Não é primo");
    }else{
        console.log("É primo");
    }

}

numeroPrimo(47);