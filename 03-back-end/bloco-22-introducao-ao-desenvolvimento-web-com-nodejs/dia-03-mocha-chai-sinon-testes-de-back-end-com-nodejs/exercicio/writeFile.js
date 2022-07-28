const fs = require('fs').promises;

const writeFile = async(nomeArquivo, conteudo) => {
  if(typeof(nomeArquivo) !== 'string' || typeof(conteudo) !== 'string') {
    throw new Error('parametros invalidos');
  }
  await fs.writeFile(nomeArquivo, conteudo);
  return 'ok';
};

module.exports = writeFile;