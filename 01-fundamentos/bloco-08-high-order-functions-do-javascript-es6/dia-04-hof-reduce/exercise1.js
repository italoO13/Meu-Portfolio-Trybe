// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(array) {
    // escreva seu código aqui
    return array.reduce((acc, objeto) => acc.concat(objeto), [])
  }

  console.log(flatten(arrays))