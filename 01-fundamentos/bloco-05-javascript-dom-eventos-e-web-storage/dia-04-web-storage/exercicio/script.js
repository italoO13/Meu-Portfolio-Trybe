
let corFundo = document.querySelector("#cor-fundo")
let body = document.querySelector("body")
let corFonte = document.querySelector("#cor-texto")
let tamanhoFonte = document.querySelector("#tamanho-fonte")
let conteudo = document.querySelector("#conteudo")
let espacamento = document.querySelector("#espacamento-fonte")
let escolheFonte = document.querySelector("#fonte")



window.onload= function(){

    if (localStorage.corFundo!==undefined){
        body.style.backgroundColor = localStorage.corFundo
        corFundo.value = localStorage.corFundo;
    }else{
        corFundo.value = "#ffffff"
    }

    if(localStorage.corFonte!==undefined){
        body.style.color= localStorage.corFonte;
        corFonte.value=localStorage.corFonte;
    }else{
        corFonte.value="#000000"
    }

    if(localStorage.tamanhoFonte!==undefined){
        conteudo.style.fontSize = localStorage.tamanhoFonte;
        tamanhoFonte.value= parseInt(localStorage.tamanhoFonte);
    }

    if(localStorage.mudaEspacamento!==undefined){
        conteudo.style.lineHeight = localStorage.mudaEspacamento;
        espacamento.value = parseInt(localStorage.mudaEspacamento);

    }

    if(localStorage.fontFamily!==undefined){
        conteudo.style.fontFamily= localStorage.fontFamily;
    }

}



corFundo.addEventListener("change", mudarCorFundo);
corFonte.addEventListener("change",mudaCorFonte);
tamanhoFonte.addEventListener("change",mudaTamanhoFonte)
espacamento.addEventListener("change", mudaEspacamento)
escolheFonte.addEventListener("change",alteraFonte)


function mudarCorFundo(event){
    body.style.backgroundColor=event.target.value;
    localStorage.corFundo= event.target.value;
}

function mudaCorFonte(event){
    body.style.color= event.target.value;
    localStorage.corFonte=event.target.value;

}

function mudaTamanhoFonte(event){
    conteudo.style.fontSize = event.target.value + "px";
    localStorage.tamanhoFonte = conteudo.style.fontSize;
}

function mudaEspacamento(event){
    conteudo.style.lineHeight = event.target.value;
    localStorage.MudaEspacamento = event.target.value;
}

function alteraFonte(event){
    if (event.target.value === "opt1"){
        conteudo.children[1].style.fontFamily = 'Poppins';
    }else{
    conteudo.children[1].style.fontFamily="Segoe UI";
    }
    localStorage.Fonte=conteudo.style.fontFamily;
}