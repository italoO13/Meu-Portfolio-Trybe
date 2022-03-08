const sum = function sum(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("parameters must be numbers");
    }
return a + b;
}

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

const encode = (texto)=> {
    let objeto= {
      vogal:["a","e","i","o","u"],
      cod: [1,2,3,4,5]
    };
    let aux = texto.split("");
  
    for (let index1 =0; index1<aux.length;index1+=1){
      for(let index2=0; index2<objeto.vogal.length;index2+=1){
          if (aux[index1]===objeto.vogal[index2]){
            aux[index1]= objeto.cod[index2];
          }
  
      }
    }
  
    return aux.join("");
}

const decode= (texto) =>{
    let objeto= {
      vogal:["a","e","i","o","u"],
      cod: [1,2,3,4,5]
    };
    let aux = texto.split("");
  
    for (let index1 =0; index1<aux.length;index1+=1){
      for(let index2=0; index2<objeto.vogal.length;index2+=1){
          if (aux[index1]==objeto.cod[index2]){
            aux[index1]= objeto.vogal[index2];
          }
  
      }
    }
    return aux.join("");
}

// const validaLista = (arr) =>{
//     if(arr.length===0) {
//         throw "Vazio!"
//     }

// }

// const techList =(arr,name)=>{
//     try {
//         const obj =[];
//         arr.sort().forEach(element => {
//             aux ={tech:element, name:name};
//             obj.push(aux);
//         });
//         return obj;
//     } catch (error) {
//         return error
// }};

const techList =(arr,name)=>{
    if (arr.length===0){
        return "Vazio!";
    }
        const obj =[];
        arr.sort().forEach(element => {
            aux ={tech:element, name:name};
            obj.push(aux);
        });
        return obj;
};

const hydrate = (texto)=>{
    let num =0;
    texto.split("").forEach(elemento =>{
        if (!isNaN(parseInt(elemento))) {
            num+= parseInt(elemento);
        }
    });
    if (num <=1) {
        return `${num} copo de água`;
    }else {
        return `${num} copos de água`;
    }
};

const searchEmployee = (id,)=>{

};

module.exports = {sum,myRemove,myFizzBuzz,encode,decode,techList,hydrate,searchEmployee};