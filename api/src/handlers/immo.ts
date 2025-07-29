import { NextFunction, Request, Response } from "express";
import { CreateImmoDto } from "../dtos/CreateImmo.dto";
import { Immobilie } from "../database/models/immobilie.model";
import { FurtherImages } from "../database/models/furtherimages.model";
import createImmobilie from "../database/operations/immo";

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
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const myFormData: CreateImmoDto = JSON.parse(req.body.formData);

    let furtherImagesPaths: string[] = [];
    if(files.furtherImages){
        for(const value of files.furtherImages){
            furtherImagesPaths.push(value.filename);
        }
    }
    let mapImageFilename: string = '';
    if(files.mapImage){
        mapImageFilename = files.mapImage[0].filename;
    }

    let titleImageFilename: string = '';
    if(files.titleImage){
        titleImageFilename = files.titleImage[0].filename;
    }

    return createImmobilie(mapImageFilename, titleImageFilename, myFormData, furtherImagesPaths, res);
}

export const getCarouselImages = async (req: Request, res: Response, next: NextFunction) => {
    const queryResult: Immobilie[] = await Immobilie.findAll({
        where: { carouselObject: true },
        raw: true,
        attributes: ['city', 'titleImagePath', 'objectnr']
    });

    res.json(queryResult);
}


export const getFurtherImages = async (req: Request, res: Response, next: NextFunction) => {
    const objnr = req.params.objectnr;
    const queryResult: FurtherImages[] = await FurtherImages.findAll({
        where: { objectnr: objnr},
        raw: true,
        attributes: ['imagePath']
    })

    res.status(200).json(queryResult);
}

export const getImmoItem = async (req: Request, res: Response, next: NextFunction) => {
    const objectnr = req.params.objectnr;

    const queryResult: Immobilie | null = await Immobilie.findOne({
        where: {objectnr: objectnr},
        raw: true
    })

    if(queryResult) return res.status(200).json(queryResult);
    return res.status(404).json({message: "Dieses Objekt ist nicht vorhanden!"});
}