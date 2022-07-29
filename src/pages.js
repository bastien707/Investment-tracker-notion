export const getPage = async (notion, pageId) => {
    const response = await notion.pages.retrieve({ page_id: pageId });
    console.log(response);
};