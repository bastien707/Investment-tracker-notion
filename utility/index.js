const dotenv = require('dotenv');
dotenv.config();

const config = {
    host: process.env.NOTION_API_KEY,
};

module.exports = {
    config
}