import {getPriceBTC, getPriceEGLD, getPriceETH} from "./getPrices.js";

export const getBlock = async (notion, blockId) => {
    const response = await notion.blocks.retrieve({ block_id: blockId });
    console.log(response);
};

export const updateBitcoinBlock = async (notion, block) => {
    const blockId = block;
    let BTC =  await getPriceBTC();

    try {
        if(BTC.priceChangePercent >= 0){
            await notion.blocks.update({
                block_id: blockId,
                "callout": {
                    "rich_text": [
                        {
                            "text": {
                                content: `$ ${BTC.lastPrice.slice(0,9)} (${BTC.priceChangePercent}%) `
                            },
                            annotations: {
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
                                content: `$ ${BTC.lastPrice.slice(0,9)} (${BTC.priceChangePercent}%) `
                            },
                            annotations: {
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

export const updateEthereumBlock = async (notion, block) => {
    const blockId = block;
    let ETH =  await getPriceETH();

    try {
        if(ETH.priceChangePercent >= 0){
            await notion.blocks.update({
                block_id: blockId,
                "callout": {
                    "rich_text": [
                        {
                            "text": {
                                content: `$ ${ETH.lastPrice.slice(0,9)} (${ETH.priceChangePercent}%) `
                            },
                            annotations: {
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
                                content: `$ ${ETH.lastPrice.slice(0,9)} (${ETH.priceChangePercent}%) `
                            },
                            annotations: {
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

export const updateEGoldBlock = async (notion, block) => {
    const blockId = block;
    let EGLD =  await getPriceEGLD();

    try {
        if(EGLD.priceChangePercent >= 0){
            await notion.blocks.update({
                block_id: blockId,
                "callout": {
                    "rich_text": [
                        {
                            "text": {
                                content: `$ ${EGLD.lastPrice.slice(0,9)} (${EGLD.priceChangePercent}%) `
                            },
                            annotations: {
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
                                content: `$ ${EGLD.lastPrice.slice(0,9)} (${EGLD.priceChangePercent}%) `
                            },
                            annotations: {
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