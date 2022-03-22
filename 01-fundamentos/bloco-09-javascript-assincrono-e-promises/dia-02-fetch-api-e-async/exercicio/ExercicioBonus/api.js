const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    const coins = await fetch(url)
        .then((response) => response.json())
        .then((dados) => dados.data)
        .catch((error) => error.toString())
    return coins;
}

const dadosConversao = async () => {
    const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
    const endpoint = '/currencies/usd.min.json'
    const urlApi = baseUrl.concat(endpoint);

    const conversao = await fetch(urlApi)
        .then((response) => response.json())
        .then((dados) => dados.usd)
        .catch((error) => error.toString())
    return conversao;
}

const resultado = async() => {
    const coins = await fetchCoins();
    const usdCurrencies = await dadosConversao();
    const lista = document.querySelector("#lista");

    const test = coins
        .filter((coin) => Number(coin.rank) <= 10)
        .forEach((coin) => {
            const newLi = document.createElement('li');
            const usdPrice = Number(coin.priceUsd);
            const brlPrice = usdPrice * usdCurrencies.brl;
            newLi.innerText = `${coin.name} (${coin.symbol}): ${brlPrice.toFixed(2)}`;
            lista.appendChild(newLi);
        })
    console.log(usdCurrencies.brl)
}

resultado()