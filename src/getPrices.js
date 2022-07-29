import fetch from "node-fetch";

export const getPriceBTC = async () => {
    let response = await fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT');

    if (!response.ok) {
        alert("HTTP-Error in getPriceBTC: " + response.status);
    } else {
        return response.json();
    }
}

export const getPriceETH = async () => {
    let response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');

    if(response.ok){
        let json = await response.json();
        return json.price.slice(0,8);
    } else {
        alert("HTTP-Error in getPriceETH: " + response.status);
    }
}
