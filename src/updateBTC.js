import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
import getPriceBTC from "./getPriceBTC.js";
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const updateBTC = async () =>  {
    const blockId = process.env.BTC_DCA_PAGE_BLOCK;
    const BTC_PRICE = await getPriceBTC()
    await notion.blocks.update({
        block_id: blockId,
        "heading_2": {
            "rich_text": [
                {
                    "text": {
                        "content": `${BTC_PRICE} $`
                    },
                }
            ],
            "color": "green_background"
        }
    });
}


setInterval(updateBTC, 3000);
