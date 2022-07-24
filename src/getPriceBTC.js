import fetch from "node-fetch";

const url = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'

async function getPriceBTC() {
    let response = await fetch(url);
    let data = await response.json();
    return data.price.slice(0,8);
}

export default getPriceBTC;