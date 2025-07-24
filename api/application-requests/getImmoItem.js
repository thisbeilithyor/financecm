import Immobilie from "../database/models/immobilie.js";

const getImmoItem = async (req, res) => {
    const objectnr = req.params.objectnr;

    const queryResult = await Immobilie.findOne({
        where: {objectnr: objectnr},
        raw: true
    })

    if(queryResult) return res.json(queryResult);
    return res.status(404).json({message: "Dieses Objekt ist nicht vorhanden!"});
}
export default getImmoItem;