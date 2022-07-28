const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data  = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (error) {
  console.log(error.message);
}