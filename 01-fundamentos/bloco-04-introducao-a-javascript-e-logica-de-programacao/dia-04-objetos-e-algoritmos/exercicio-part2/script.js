// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. 

function verificaPalindrome(palavra){
    palavra = palavra.toUpperCase();
    let contrario = palavra.split("");
    contrario= contrario.reverse();
    contrario = contrario.join("");
    // poderia ser feito ket reverse = palavra.split("").reverse().join("")

    if (palavra===contrario){
        return true;
    }else{
        return false;
    }





}

console.log(verificaPalindrome("desenvolvimento"));


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 

let n= [2, 3, 6, 7, 10, 1]

function maiorIndice(n){
    let aux = {
        posicao: 0,
        valor:n[0]
    }
    for (let index in n){
        if (aux.valor < n[index]){
            aux.valor = n[index];
            aux.posicao = index;
        }
    }

    return aux
}

console.log("Valor é : " + maiorIndice(n).valor+ " e posição é: "+maiorIndice(n).posicao)

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. 

n =  [2, 4, 6, 7, 10, 0, -3]; 

function menorValor(n){
    let indiceMenor =0;
    for(indice in n){
        if (n[indiceMenor]> n[indice]){
            indiceMenor=indice;
        }
    }
    return indiceMenor;
}

console.log(menorValor(n))


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. 

let nomes =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(nomes){
    let maiorIndice=0;
    for (let index in nomes){
        if (nomes[maiorIndice].length <nomes[index].length){
            maiorIndice = index;
        }
    }
    return nomes[maiorIndice];
}

console.log(maiorNome(nomes));


// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. 

n=[2, 3, 2, 5, 8, 2, 3]

function maisRepete(n){
let aux;
let posicao=0;
let indice;

for (let i =0; i< n.length; i+=1 ){
        aux=0;
    for (let j =0; j<n.length; j+=1){
        if (n[i]===n[j]){
            aux+=1;
        }
    }
        if (posicao< aux){
            posicao=aux;
            indice=i;
        }

}

    return [n[indice],posicao];
}

console.log("O numero inteiro é: ",maisRepete(n)[0] + ", o numero de vezes: ", maisRepete(n)[1])

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N. 

function numNatural(num){
    let soma =0;
    if (num==0){
        return 0
    }
    for (let i=0; i<= num;i+=1){
        soma+= i;
    }

    return soma;
}

console.log(numNatural(5))


// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word . 

function conferePalavra(word, ending){
    let aux= true;
    let inicio = word.indexOf(ending);


    for (let index=inicio; index< word.length;index+=1){
        if(word[index]!=ending[index-inicio]){
            aux=false;
        }
    }

    return aux;

}


console.log(conferePalavra("trybe","be"))