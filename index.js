import { Client } from "@notionhq/client";
import * as config from "./utility/index.js";
import {
  updateBitcoinToDatabase,
  updateEGoldToDatabase,
  updateEthereumToDatabase,
} from "./src/database.js";
import {
  updateBitcoinBlock,
  updateEGoldBlock,
  updateEthereumBlock,
} from "./src/blocks.js";

const notion = new Client({ auth: config.env.notionKey });

const updateBlocks = async () => {
  try {
    Promise.all([
      updateBitcoinBlock(notion, config.env.btcBlock),
      updateEthereumBlock(notion, config.env.ethBlock),
      updateEGoldBlock(notion, config.env.egldBlock),
    ]);
  } catch (error) {
    console.log("Error in updateBlocks: " + error);
  }
};

const updateDatabase = async () => {
  try {
    Promise.all([
      updateBitcoinToDatabase(notion, config.env.btcTable),
      updateEthereumToDatabase(notion, config.env.ethTable),
      updateEGoldToDatabase(notion, config.env.egldTable),
    ]);
  } catch (error) {
    console.log("Error in updateDatabase: " + error);
  }
};

const run = async () => {
  try {
    setInterval(async () => {
      await updateBlocks();
      await updateDatabase();
    }, 10000);
  } catch (error) {
    console.log("Error in main: " + error);
  }
};

run();
