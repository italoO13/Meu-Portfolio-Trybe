const readline = require('readline')
const fs = require('fs').promises;

const question = (msg) => {
  const readlineInterface = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(msg, (answer) => {
      readlineInterface.close()
      resolve(answer);
    });
  })
}

const readFile = async(nomeArquivo) => {
  const content =  await fs.readFile(`./${nomeArquivo}`, 'utf-8');
  return content;
}

const main = async () => {
  try {
    const nome = await question('Qual o nome do arquivo ?');
    const texto = await readFile(nome);
    console.log(texto);
    
  } catch (error) {
    console.log('arquivo inxistente');
  }
}

main()
