const header = document.querySelector("header");
const corpo = document.querySelector("#container");
const seccao = document.querySelectorAll("section")
const titulosEmergencial = document.querySelectorAll(".emergency-tasks h3");
const titulosNoEmergencial = document.querySelectorAll(".no-emergency-tasks h3");
const footer  = document.querySelector("footer");


header.style.backgroundColor="green";
corpo.style.backgroundColor="#D3D3D3";

seccao[0].style.backgroundColor="#ff7f50";
seccao[1].style.backgroundColor="yellow";


// for (let index in titulosEmergencial){
//     console.log(titulosEmergencial[parseInt(index)])

// }




for (let i=0; i<titulosEmergencial.length;i+=1){
    titulosEmergencial[i].style.backgroundColor="#993399";

}

for (let i=0; i<titulosNoEmergencial.length;i+=1){
    titulosNoEmergencial[i].style.backgroundColor="black";

}

footer.style.backgroundColor="black";


// for (let index in titulosNoEmergencial){
//     titulosNoEmergencial[index].style.backgroundColor="red";
// }
