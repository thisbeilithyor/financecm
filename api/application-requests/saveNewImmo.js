import saveImmobilie from "../database/operations/saveImmobilie.js";

const saveNewImmo = (req, res) => {
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

export default saveNewImmo;