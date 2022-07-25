import { Client } from "@notionhq/client";
import * as config from "./utility/index.js";
import { updateCurrentAmount } from "./src/database.js";
import { updateBTC } from "./src/blocks.js";
const notion = new Client({ auth: config.env.notionKey });

setInterval(() => {
    updateBTC(notion, config.env.btcBlock).then();
    updateCurrentAmount(notion, config.env.financialDB).then()
}, 3000);
