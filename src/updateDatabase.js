import {Client} from "@notionhq/client";
import getPriceBTC from "./getPriceBTC.js";
import * as config from '../utility/index.js';

const notion = new Client({ auth: config.env.notionKey });

const getDatabase = async () => {
    const databaseId = config.env.financialDB;
    const response = await notion.databases.retrieve({ database_id: databaseId });
    console.log(response);
};

const updateCurrentAmount = async () => {
    const databaseId = config.env.financialDB;
    return await notion.databases.update({
        database_id: databaseId,
        properties: {
            ["Current amount value"]: {
                formula: {
                    expression: `prop('Amount') * ${await getPriceBTC()}`
                }
            }
        }
    });
};

setInterval(updateCurrentAmount, 3000);





