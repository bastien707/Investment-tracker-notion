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
    let response = await fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT');

    if (!response.ok) {
        alert("HTTP-Error in getPriceBTC: " + response.status);
    } else {
        return response.json();
    }
}
