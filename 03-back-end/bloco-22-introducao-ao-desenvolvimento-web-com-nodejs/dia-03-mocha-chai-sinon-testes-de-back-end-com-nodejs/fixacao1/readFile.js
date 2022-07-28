const fs = require('fs').promises;


const readFile = async(nomeFile) => {
  try {
    const conteudo = await fs.readFile(nomeFile, 'utf8');
    return(conteudo);
  } catch (error) {
    console.log(error.message);
    return null;
  }


}

module.exports = readFile;