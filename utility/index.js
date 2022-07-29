import dotenv from 'dotenv';
dotenv.config({path: '.env'});
dotenv.config({path: '../.env'});

export var env = {
    notionKey: process.env.NOTION_API_KEY,
    btcTable: process.env.BTC_TABLE,
    btcBlock: process.env.BTC_CALLOUT_BLOCK,
    btcPage: process.env.BTC_DCA_PAGE,
    ethTable: process.env.ETH_TABLE,
    ethBlock: process.env.ETH_CALLOUT_BLOCK
}