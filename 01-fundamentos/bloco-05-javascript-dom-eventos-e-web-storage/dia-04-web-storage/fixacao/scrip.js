const button = document.getElementById("add-button");
const input = document.getElementById("phrases-input");
const list = document.getElementById("phrases-list");

button.addEventListener("click",addFrase);

function addFrase(){
    const oldList = JSON.parse(localStorage.getItem("phrases"));
    const texto = input.value;
    oldList.push(texto);
    localStorage.setItem("phrases", JSON.stringify(oldList));
    adicionaAoDom();
}

function adicionaAoDom(){
    const textosStorage = JSON.parse(localStorage.getItem("phrases"));
    const ultimoTexto = textosStorage.length -1;
    const ultimoTextoMesmo = textosStorage[ultimoTexto];
    const itemLista = document.createElement("li");
    itemLista.innerText= ultimoTextoMesmo;
    list.appendChild(itemLista);


}


function criacaoInicial(){  
    if (localStorage.getItem("phrases")===null){
        localStorage.setItem("phrases",JSON.stringify([]));
    }else{
        const phrases = JSON.parse(localStorage.getItem("phrases"))
        
        for (let index=0; index< phrases.length;index+=1){
            const itemLista = document.createElement("li");
            itemLista.innerText= phrases[index];
            list.appendChild(itemLista);
        }
    }


}


window.onload = function(){
    criacaoInicial();
}