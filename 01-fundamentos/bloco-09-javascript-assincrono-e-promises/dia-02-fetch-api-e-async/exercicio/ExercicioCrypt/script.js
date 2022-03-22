const url = 'https://api.coincap.io/v2/assets';
const lista = document.querySelector("#lista");
const listaAsync = document.querySelector("#listaAsync");
const fetchCript = () => {
    fetch(url)
        .then((response) => response.json())
        .then((dados) => dados.data.reduce((acc, object) => {
            if (acc <=10) {
                const newOl = document.createElement('li');
                newOl.innerText = object.name;
                lista.appendChild(newOl);
            }
            return acc += 1;
        },1))
        .catch((error) => {
            console.log(`Falha, seu código teve o seguinte erro ${error.menssage}`);
        });
}

const fetchAsync = async () => {
    
    try {
        const result = await fetch(url)
            .then((response) =>response.json())
            .then((dados) => dados.data);
            result.reduce((acc, object) => {
                if (acc <=10) {
                    const newOl = document.createElement('li');
                    newOl.innerText = `${object.name} (${object.symbol}): ${Number(object.priceUsd).toFixed(2)} `;
                    listaAsync.appendChild(newOl);
                }
                return acc += 1;
            },1)
    } catch (error) {
        console.log(error);
    }

};

window.onload = () => {
    fetchCript();
    fetchAsync();
};