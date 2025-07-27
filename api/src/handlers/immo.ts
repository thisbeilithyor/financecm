import { NextFunction, Request, Response } from "express";
import { CreateImmoDto } from "../dtos/CreateImmo.dto";

export const getImmos = (req: Request, res: Response, next: NextFunction) => {
    console.log("has been called!");
    req.body.email;
    res.json({ message: "getImmos here!" });
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