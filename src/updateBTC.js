import getPriceBTC from "./getPriceBTC.js";

export const updateBTC = async (notion, block) =>  {
    const blockId = block;
    const BTC_PRICE = await getPriceBTC()
    await notion.blocks.update({
        block_id: blockId,
        "heading_2": {
            "rich_text": [
                {
                    "text": {
                        "content": `Bitcoin price : ${BTC_PRICE} $ 🔥`
                    },
                }
            ],
            "color": "default"
        }
    });
}