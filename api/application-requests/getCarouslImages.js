import Immobilie from "../database/models/immobilie.js";

const getCarouselImages = async (req, res) => {
    const queryResult = await Immobilie.findAll({
        where: { carouselObject: true },
        raw: true,
        attributes: ['city', 'titleImagePath', 'objectnr']
    })

    res.json(queryResult);
}

export default getCarouselImages;