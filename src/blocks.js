import {getPriceBTC} from "./getPrices.js";

export const getBlock = async (notion, blockId) => {
    const response = await notion.blocks.retrieve({ block_id: blockId });
    console.log(response);
};

export const updateBitcoinBlock = async (notion, block) => {
    const blockId = block;
    let BTC =  await getPriceBTC();

    try {
        if(BTC.priceChangePercent >= -2){
            await notion.blocks.update({
                block_id: blockId,
                "callout": {
                    "rich_text": [
                        {
                            "text": {
                                content: `(${BTC.priceChangePercent}%) $ ${BTC.lastPrice.slice(0,9)}`
                            },
                            annotations: {
                                italic: true,
                                bold: true,
                                color: 'green'
                            },
                        },
                    ],
                    icon: {
                        external: {
                            url: "https://cdn-icons-png.flaticon.com/512/7090/7090972.png"
                        },
                    },
                    color: "green_background"
                }
            });
        } else {
            await notion.blocks.update({
                block_id: blockId,
                "callout": {
                    "rich_text": [
                        {
                            "text": {
                                content: `(${BTC.priceChangePercent}%) $ ${BTC.lastPrice.slice(0,9)}`
                            },
                            annotations: {
                                italic: true,
                                bold: true,
                                color: 'red'
                            },
                        },
                    ],
                    icon: {
                        external: {
                            url: "https://cdn-icons-png.flaticon.com/512/7090/7090863.png"
                        },
                    },
                    color: "red_background"
                }
            });
        }

    } catch (error) {
        return error;
    }
}