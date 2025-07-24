import FurtherImages from "../database/models/furtherimages.js";

const getFurtherImages = async (req, res) => {
    const objnr = req.params.objectnr;
    const queryResult = await FurtherImages.findAll({
        where: { objectnr: objnr},
        raw: true,
        attributes: ['imagePath']
    })

    res.json(queryResult);
}
export default getFurtherImages;