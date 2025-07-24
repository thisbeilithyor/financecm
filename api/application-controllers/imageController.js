import FurtherImages from "../database/models/furtherimages.js";
import Immobilie from "../database/models/immobilie.js";


export const getFurtherImages = async (req, res) => {
    const objnr = req.params.objectnr;
    const queryResult = await FurtherImages.findAll({
        where: { objectnr: objnr},
        raw: true,
        attributes: ['imagePath']
    })

    res.json(queryResult);
}


export const getCarouselImages = async (req, res) => {
    const queryResult = await Immobilie.findAll({
        where: { carouselObject: true },
        raw: true,
        attributes: ['city', 'titleImagePath', 'objectnr']
    })

    res.json(queryResult);
}
