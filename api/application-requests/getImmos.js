import Immobilie from "../database/models/immobilie.js";

const getImmos = async (req, res) => {
    const queryResult = await Immobilie.findAll({
        raw: true
    })
    res.json(queryResult);
}
export default getImmos;