const fs = require('fs').promises;
const arrString = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

const writeFiles = async() => {
  const promises = [];
  arrString.map((str,index) => {
    promises.push(fs.writeFile(`./file${index + 1}.txt`, str));  
  })
  await Promise.all(promises);
}

const readFiles = async () => {
  const arquivos = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
  const promises = [];
  arquivos.map((nomeArquivo) => {
    promises.push(fs.readFile(nomeArquivo))
  })
  const result = await Promise.all(promises)
  const data = result.join(' ');
  await fs.writeFile('./allfile.txt', data);

}


  const main = async()=> {
    try {
      writeFiles();
      readFiles();  
    } catch (error) {
      console.log(error.message);
    }
  }
main();