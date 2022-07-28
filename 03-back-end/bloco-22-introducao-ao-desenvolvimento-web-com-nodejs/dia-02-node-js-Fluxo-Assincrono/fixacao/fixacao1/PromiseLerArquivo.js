const fs = require('fs');

const readFilePromisse = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) reject(err);
      resolve(content);
    })
  });
}

readFilePromisse('nome.txt')
  .then((textoresult) => {
    console.log(textoresult)
    return readFilePromisse('nome2.txt');
  })
  .then((textoresult) => {
    console.log(textoresult);
  }).catch((err) => console.log(err.message));