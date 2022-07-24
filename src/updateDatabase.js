import {Client} from "@notionhq/client";
import fetch from "node-fetch";
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const getDB = async () => {
    const databaseId = process.env.FINANCING_TABLE;
    const response = await notion.databases.retrieve({ database_id: databaseId });
    console.log(response.properties.Value);
};





