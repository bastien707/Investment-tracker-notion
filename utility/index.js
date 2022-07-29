import dotenv from 'dotenv';
dotenv.config({path: '.env'});
dotenv.config({path: '../.env'});

export var env = {
    notionKey: process.env.NOTION_API_KEY,
    financialDB: process.env.FINANCING_TABLE,
    btcBlock: process.env.BTC_UPDATE_CALLOUT_BLOCK,
    btcPage: process.env.BTC_DCA_PAGE
}