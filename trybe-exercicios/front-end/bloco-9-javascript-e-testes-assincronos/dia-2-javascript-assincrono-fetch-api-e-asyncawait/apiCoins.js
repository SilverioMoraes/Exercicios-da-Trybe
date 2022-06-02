const apiUrl = 'https://api.coincap.io/v2/assets';

const fetchCoins = async () => {
    const arrayOfCoins = await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch ((error) => error.toString());
  return arrayOfCoins;
}

const printCoins = async () => {
  const coins = await fetchCoins();
  const coinsList = document.querySelector('#coins');
  
  coins
  .filter((coin) => Number(coin.rank) <= 10)
  .forEach((coin) => {
    const newLi =document.createElement('li');
    const price = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.price}`;
    coinsList.appendChild(newLi);
  });
}

window.onload = () => printCoins();
