import { getPriceBTC } from "./getPrices.js";

export const updateBitcoinBlock = async (notion, block) => {
    const blockId = block;
    const BTC_PRICE = await getPriceBTC()
    try {
        await notion.blocks.update({
            block_id: blockId,
            "heading_2": {
                "rich_text": [
                    {
                        "text": {
                            "content": `Bitcoin price : ${BTC_PRICE} $`
                        },
                    }
                ],
                "color": "default"
            }
        });
    } catch (error) {
        return error;
    }
}