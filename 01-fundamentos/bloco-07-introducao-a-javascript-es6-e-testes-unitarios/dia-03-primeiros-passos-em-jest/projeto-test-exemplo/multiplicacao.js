const mult = (a,b) => a*b;

const verificanumero = (number)=> {
    if (!number) {
        throw new Error("number é indefinido");
    }
}

const multiplyByTwo =(number) => {
    try {
    verificanumero(number);
    return number*2;
    } catch (error) {
        throw error.message;   
    }
}


module.exports = {mult, multiplyByTwo};