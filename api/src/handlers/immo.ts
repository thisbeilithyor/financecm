import { NextFunction, Request, Response } from "express";
import { CreateImmoDto } from "../dtos/CreateImmo.dto";
import { Immobilie } from "../database/models/immobilie.model";

export const getImmos = async (req: Request, res: Response, next: NextFunction) => {
    const queryResult = await Immobilie.findAll({
        raw: true
    })
    if(queryResult){
        res.status(200).json(queryResult);
    }else{
        res.status(404);
    }
}

export const createImmo = (req: Request, res: Response, next: NextFunction) => {
    /*let {formData} = req.body;
    formData = JSON.parse(formData);
    let furtherImagesPaths: string[] = [];
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
    }*/
    res.json({ message: "saveImmo" });
}