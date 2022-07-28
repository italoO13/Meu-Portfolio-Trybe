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

const exercicio7 = async() => {
  try {
    const nomeArquivo = await question('Qual o nome do arquivo que deseja utilizar?');

    const conteudo = await fs.readFile(nomeArquivo, 'utf-8')
      .catch((err) => {
        console.log('Erro ao ler o arquivo:', err)
        return false;
      });
    if(!conteudo) return;

    const palavra = await question('QUal a palavra que deseja substituir')
    const palavraFinal = await question('Qual a palavra que ficará no lugar da anterior ?');
    const contentFinal = conteudo.replace(new RegExp(palavra, 'g'), palavraFinal);
    console.log(contentFinal);
    const nomeArquivoFinal = await question('QUal o nome do arquivo em que será salvo ?');
    await fs.writeFile(nomeArquivoFinal, contentFinal);
  } catch (error) {
    console.log(error.message);
  }

}

exercicio7()