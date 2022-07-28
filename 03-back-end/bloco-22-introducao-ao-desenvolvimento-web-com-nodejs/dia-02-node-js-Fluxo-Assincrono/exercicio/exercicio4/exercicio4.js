const fs = require('fs').promises;
const NomeArquivo = './simpsons.json'

const readJson = async () => {
    const content = await fs.readFile(NomeArquivo)
    const data = JSON.parse(content);
    return data;
    
}

const idName = async() => {
  try {
    const data =  await readJson()
    data.map(({id, name}) => console.log(`id:${id}, name:${name}`));
  } catch (error) {
    console.log(error.message);
  }

}

const returnPersonage = async(id) => {
  return new Promise(async(resolve, reject)=>{
      const data = await readJson();
      const personage = data.filter((person) => person.id === `${id}`);
      if (personage.lenght === 0) return reject(new Error('Personagem não encontrado'));
      resolve(personage);
    })
}

const removePerson = async(id, arquivo) => {
  try {
    const data = await readJson();
    const persons = data.filter((person) => person.id !== `${id}`)
    await fs.writeFile(arquivo, JSON.stringify(persons));
  } catch (error) {
    console.log(error.message);
  }

}

const questionB = async(id) => {
  try {
    const person = await returnPersonage(id);
    console.log(person);
  } catch (error) {
    console.log(error.message)
  }
}

const removeid106 = async() => {
  await removePerson(10, NomeArquivo);
  await removePerson(4, NomeArquivo);
}

const newArquive = async() => {
  try {
    const data = [...await returnPersonage(1), ...await returnPersonage(4)]
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(data));
    
  } catch (error) {
    console.log('newArquive', error.message);
  }
}

// idName();
// questionB(1);
// removeid106();
newArquive()
