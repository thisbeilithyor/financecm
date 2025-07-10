export const convertImgURLToBlob = async (fileURL) => {
    if(fileURL) return await (await fetch(fileURL)).blob();
}