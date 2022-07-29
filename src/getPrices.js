import fetch from "node-fetch";

export const getPriceBTC = async () => {
    let response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');

    if(response.ok){
        let json = await response.json();
        return json.price.slice(0,8);
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

export const getPriceETH = async () => {
    let response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');

    if(response.ok){
        let json = await response.json();
        return json.price.slice(0,8);
    } else {
        alert("HTTP-Error: " + response.status);
    }
}
