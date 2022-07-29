import {getPriceBTC, getPriceETH} from "./getPrices.js";

export const getDatabase = async (notion, financialDB) => {
    const response = await notion.databases.retrieve({ database_id: financialDB });
    console.log(response.properties);
};

// hidden property in database, used for formulas
export const updateBitcoinToDatabase = async (notion, financialDB) => {
    const BTC = await getPriceBTC();
    try {
        return await notion.databases.update({
            database_id: financialDB,
            properties: {
                ["Bitcoin"]: {
                    formula: {
                        expression: `${BTC.lastPrice}`
                    },
                },
            },
        });
    } catch (error) {
        return error;
    }
};

export const updateEthereumToDatabase = async (notion, ethTable) => {
    const ETH = await getPriceETH();
    try {
        return await notion.databases.update({
            database_id: ethTable,
            properties: {
                ["Ethereum"]: {
                    formula: {
                        expression: `${ETH.lastPrice}`
                    },
                },
            },
        });
    } catch (error) {
        return error;
    }
};




