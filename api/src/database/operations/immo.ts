import Sequelize from "sequelize";
import { FurtherImages } from "../models/furtherimages.model";
import { Immobilie } from "../models/immobilie.model";
import { CreateImmoDto } from "../../dtos/CreateImmo.dto";
import { Response } from "express";

const createImmobilie = async (mapImagePath: string, titleImagePath: string, formData: CreateImmoDto, furtherImagesPaths: string[], res: Response) =>{
    let success = false;
    try{
        const immo: Immobilie = await Immobilie.create({
            objectnr: formData.objectnr || 0,
            city: formData.city || "",
            description: formData.description || "",
            house: formData.house ?? true,
            price: formData.price || 0,
            squareMeters: formData.squareMeters || 0,
            bathroom: formData.bathroom ?? true,
            supermarket: formData.supermarket ?? true,
            electricity: formData.electricity ?? true,
            water: formData.water ?? true,
            pool: formData.pool ?? false,
            garden: formData.garden ?? false,
            atOcean: formData.atOcean ?? false,
            paymentDuration: formData.paymentDuration || 0,
            buildingFinished: formData.buildingFinished || "",
            uberDasProjekt: formData.uberDasProjekt || "",
            uberStandort: formData.uberStandort || "",
            mapImagePath: mapImagePath || "",
            titleImagePath: titleImagePath || "",
            carouselObject: formData.carouselObject ?? false
        } as Immobilie)
        if(immo.objectnr){
            success = true;
        }
    }catch(err){
        //Logging
        return handleDatabaseInsertError(formData.objectnr, err, res);
    }
    if(success){
        try{
            for(const currentImagePath of furtherImagesPaths){
                const a = await FurtherImages.create({
                    imagePath: currentImagePath || "",
                    objectnr: formData.objectnr || 0
                } as FurtherImages)
            }

            const responseString = `Neues Object ${formData.objectnr} wurde erfolgreich gespeichert!`;
            return res.json({ message: responseString, success: true });
        }catch(err){
            return handleDatabaseInsertError(formData.objectnr, err, res);
        }
    }
}

const handleDatabaseInsertError = (objectnr: number, err: unknown, res: Response) => {
    if(err instanceof Sequelize.UniqueConstraintError){
        return res.json({ message: `Das Objekt mit der Objektnr ${objectnr} existiert bereits`})
    }else if (err instanceof Sequelize.ValidationError) {
        // Validierung schlägt fehl
        return res.json({ message: `Validierungsfehler: ${err.errors.map(e => e.message).join(', ')}` });
    } else if (err instanceof Sequelize.ForeignKeyConstraintError) {
        // Falscher ForeignKey-Wert
        return res.json({ message: `Ungültige Referenz: Prüfe die Foreign-Key-Beziehungen.` });
    } else if (err instanceof Sequelize.DatabaseError) {
        // Allgemeiner DB-Fehler (Syntaxfehler, falsche Spalten etc.)
        return res.json({ message: `Datenbankfehler: ${err.message}` });
    } else if (err instanceof Sequelize.ConnectionError) {
        return res.json({ message: `Datenbankverbindung fehlgeschlagen. Bitte später erneut versuchen.` });
    }
    return res.json({ message: `Ein unbekannter Fehler für das Objekt ${objectnr} auf. Errorname: XEXEX | Errorcode: 42069`})
}


export default createImmobilie;