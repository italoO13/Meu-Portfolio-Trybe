const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt'

fs.writeFile(nomeDoArquivo, 'Não estou mais com sono')
  .then(() => console.log('foi escrito com sucesso'))
  .catch((err)=> console.log(err));