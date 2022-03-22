const urlApi = 'https://icanhazdadjoke.com/';
const piada = document.getElementById('jokeContainer');
const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    const textoPiada = fetch(urlApi, myObject)
        .then((response) => response.json())
        .then((dados) =>  piada.innerText = dados.joke);
};


window.onload = () => fetchJoke();