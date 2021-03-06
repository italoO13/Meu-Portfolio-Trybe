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
  
  // Adicione o código do exercício aqui:

//   1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. 

function authorBornIn1947() {
    // escreva aqui o seu código
   return books.find((objeto)=> objeto.author.birthYear === 1920);
  }

console.log(authorBornIn1947())


// 2 - Retorne o nome do livro de menor nome. 


function smallerName() {
    let nameBook;
    nameBook = books[0].name;
    // escreva aqui o seu código
    books.forEach((objeto) => {
        if (objeto.name.length < nameBook.length) {
            nameBook = objeto.name;
        }
    });
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }


//   3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
    // escreva seu código aqui
    return books.find((objeto)=>{
        return objeto.name.length === 26;
    });
  }

console.log(getNamedBook())


// 4 - Ordene os livros por data de lançamento em ordem decrescente. 

const orderna = (objeto1, objeto2) => {
    return objeto2.releaseYear - objeto1.releaseYear;
}

function dataLancamento () {
    books.sort(orderna)
};

dataLancamento();
console.log(books)

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário. 

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((objeto)=>{
    return (objeto.author.birthYear >= 1901 && objeto.author.birthYear < 2000)
  });
}
console.log(everyoneWasBornOnSecXX());

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário. 


function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((objeto) => {
    return (objeto.releaseYear >= 1980 && objeto.releaseYear < 1989);
  });
}

console.log(someBookWasReleaseOnThe80s());


// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário. 

function authorUnique() {
    // escreva seu código aqui
    let ano= books[0].author.birthYear;
    return books.every((objeto)=> {
        return objeto.author.birthYear === ano;
    });
  }

console.log(authorUnique())