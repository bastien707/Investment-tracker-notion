import getPriceBTC from "./getPriceBTC.js";

export const getDatabase = async (notion, financialDB) => {
    const response = await notion.databases.retrieve({ database_id: financialDB });
    console.log(response);
};

export const updateCurrentAmount = async (notion, financialDB) => {
    const BTC_PRICE = await getPriceBTC();
    return await notion.databases.update({
        database_id: financialDB,
        properties: {
            ["Current amount value"]: {
                formula: {
                    expression: `round(prop('Amount') * ${BTC_PRICE})`
                }
            }
        }
    });
};




