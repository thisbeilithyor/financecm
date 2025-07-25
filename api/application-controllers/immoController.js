import saveImmobilie from "../database/operations/saveImmobilie.js";
import Immobilie from "../database/models/immobilie.js";


export const saveNewImmo = (req, res) => {
    let {formData} = req.body;
    formData = JSON.parse(formData);
    let furtherImagesPaths = [];
    if(req.files.furtherImages){
        for(const value of req.files.furtherImages){
            furtherImagesPaths.push(value.filename);
        }
    }
    let mapImageFilename = null;
    if(req.files.mapImage){
        mapImageFilename = req.files.mapImage[0].filename;
    }

    let titleImageFilename = null;
    if(req.files.titleImage){
        titleImageFilename = req.files.titleImage[0].filename;
    }
    return saveImmobilie(mapImageFilename, titleImageFilename, formData, furtherImagesPaths, res);
}


export const getImmos = async (req, res) => {
    const queryResult = await Immobilie.findAll({
        raw: true
    })
    if(queryResult){
        res.status(200).json(queryResult);
    }else{
        res.status(404);
    }
}


export const getImmoItem = async (req, res) => {
    const objectnr = req.params.objectnr;

    const queryResult = await Immobilie.findOne({
        where: {objectnr: objectnr},
        raw: true
    })

    if(queryResult) return res.json(queryResult);
    return res.status(404).json({message: "Dieses Objekt ist nicht vorhanden!"});
}