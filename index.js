import { Client } from "@notionhq/client";
import * as config from "./utility/index.js";
import {updateBitcoinToDatabase} from "./src/database.js";
import { updateBitcoinBlock } from "./src/blocks.js";
const notion = new Client({ auth: config.env.notionKey });

setInterval(() => {
    updateBitcoinBlock(notion, config.env.btcBlock).then();
    updateBitcoinToDatabase(notion, config.env.financialDB).then();
}, 3000);
