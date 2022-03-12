const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

  const result = [
    {id:1,
    nota:4.8
    },
    {id:2,
        nota:4
    },
    {id:3,
        nota:4.5
    },
    {id:4,
        nota:3.4
    },
    {id:5,
        nota:5
    },
    {id:6,
        nota:3.9
    }
  ];

//Traga as informações completas com as notas;

  const retornaNota = (books,result) => {
    return books.map((objeto) => {
        objeto.nota = result.filter((nota) => objeto.id === nota.id)[0].nota;
        return objeto;
    });
  };

console.log(retornaNota(books,result));

  //Retorne o livro com a maior nota no formato Filme xxx com nota xxxx


// Forma 1

  const objetoNotaMaior = (notaMaior,books) => {
    return `Filme: ${books.find((objeto) => objeto.id === notaMaior.id).name} com Nota: ${notaMaior.nota}`;

  };

  const notaMaior = (result,books) => {
    let maiorNota ={id:0 , nota:0};
    result.forEach((nota) => {
        if (maiorNota.nota < nota.nota) {
            maiorNota = nota;
        };
    })
    return objetoNotaMaior(maiorNota,books)
  };

  console.log(notaMaior(result,books))


// Forma 2

const formaDois = (books,result) => {
    return books.map((objeto) => {
        objeto.nota = result.find((nota) => nota.id === objeto.id).nota;
        return objeto;
    }).sort((objeto1,objeto2) => objeto2.nota - objeto1.nota)[0];
}

console.log(formaDois(books,result));