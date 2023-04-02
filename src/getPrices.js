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
        alert("HTTP-Error in getPriceETH: " + response.status);
    } else {
        return response.json();
    }
}

export const getPriceEGLD = async () => {
    let response = await fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=EGLDUSDT');

    if (!response.ok) {
        alert("HTTP-Error in getPriceEGLD: " + response.status);
    } else {
        return response.json();
    }
}

export const getPriceUOS = async () => {
    let response = await fetch('https://api.kucoin.com/api/v1/market/stats?symbol=UOS-USDT');

    if (!response.ok) {
        alert("HTTP-Error in getPriceUOS: " + response.status);
    } else {
        return response.json();
    }
}
