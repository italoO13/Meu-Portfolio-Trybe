const ValidaObjeto = (objeto) => {
    if (typeof(objeto) !== "object") {
    throw TypeError ("Nao é um objeto");
    }
}

const imprimeObjeto = (objeto) => {
    try {
        ValidaObjeto(objeto)
        for (let chave of Object.keys(objeto)){
            console.log(`${chave}, nivel ${objeto[chave]}`)
        }
        
    }catch (e) {
        throw e;
    }
    
}

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

imprimeObjeto(student1)