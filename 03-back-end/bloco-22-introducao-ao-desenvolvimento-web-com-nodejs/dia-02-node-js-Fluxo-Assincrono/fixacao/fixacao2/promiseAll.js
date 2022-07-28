const fs = require('fs').promises;

Promise.all([
  fs.readFile('arquivo1.txt'),
  fs.readFile('arquivo2.txt'),
  fs.readFile('arquivo3.txt'),
])
  .then(([file1, file2, file3]) => {
    const tamanho = file1.byteLength + file2.byteLength + file3.byteLength
    console.log(tamanho);
  })
  .catch((err) => console.log(err.message));