import { NextFunction, Request, Response } from "express";
import { CreateImmoDto } from "../dtos/CreateImmo.dto";
import { FurtherImages } from "../database/models/furtherimages.model";
import createImmobilie from "../database/operations/immo";
import { Immobilie } from "../database/models/immobilie.model";
import sequelize from "../database/util/database";
import { MultilingualText } from "../database/models/multilingualText.model";
import { QueryTypes } from "sequelize";


export const getImmos = async (req: Request, res: Response, next: NextFunction) => {
    const language = req.query.language;
    let queryResult: object[] = [];
    try{
        queryResult = await sequelize.query(
            `SELECT I.*, MT.city, MT.description, MT.uberDasProjekt, MT.uberStandort
            FROM Immobilie as I 
            INNER JOIN MultilingualText AS MT ON MT.objectnr = I.objectnr
            INNER JOIN Language as L ON L.languageID = MT.languageID
            WHERE L.language = :language`,{
                replacements: {language},
                type: QueryTypes.SELECT
            },
        )
        console.log(queryResult);
    }catch(err){
        console.log(err);
    }

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
    const language = req.query.language;

    const queryRes = await sequelize.query(`
        SELECT MT.city, I.titleImagePath, I.objectnr
        FROM Immobilie AS I 
        INNER JOIN MultilingualText AS MT ON MT.objectnr = I.objectnr
        INNER JOIN Language AS L ON L.languageID = MT.languageID
        WHERE I.carouselObject = 1 AND L.language = :language`,{
            replacements: {language},
            type: QueryTypes.SELECT
        })

    res.json(queryRes);
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
    const language = req.query.language;

    let queryResult: object[] = [];
    try{
        queryResult = await sequelize.query(`
            SELECT I.*, MT.city, MT.description, MT.uberDasProjekt, MT.uberStandort
            FROM Immobilie AS I 
            INNER JOIN MultilingualText AS MT ON MT.objectnr = I.objectnr
            INNER JOIN Language AS L ON L.languageID = MT.languageID
            WHERE L.language = :language AND I.objectnr = :objectnr`,{
                replacements: {language, objectnr},
                type: QueryTypes.SELECT
            })
    }catch(err){
        console.log(err);
    }

    let queryResultItem: object = queryResult[0];

    if(queryResultItem) {
        res.status(200).json(queryResultItem);
        await Immobilie.increment('views', {
            by: 1,
            where: { objectnr: objectnr }
        });
        return;
    };
    return res.status(404).json({message: "Dieses Objekt ist nicht vorhanden!"});
}