const fetch = require ('node-fetch');


// Forma 1

const fetchJoke = () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log("Algo deu errado", error));
};

// fetchJoke();


// Forma 2

const fetchJokeComAsync = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    
    const result = await fetch(url)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => `Algo deu errado  ${error}`);
    
    console.log(result);
};


// fetchJokeComAsync()


// Forma 3

const fetchJokeForma3 = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    try {
        const response  = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
};

fetchJokeForma3()