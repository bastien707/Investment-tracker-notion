import { Client } from "@notionhq/client";
import * as config from "./utility/index.js";
import {updateBitcoinToDatabase} from "./src/database.js";
import { updateBitcoinBlock } from "./src/blocks.js";
const notion = new Client({ auth: config.env.notionKey });


function run(){
    try {
        setInterval(() => {
            updateBitcoinBlock(notion, config.env.btcBlock).then();
            updateBitcoinToDatabase(notion, config.env.financialDB).then();
        }, 5000);
    } catch (error) {
        console.log("Error in main: " + error);
    }
}

run()


