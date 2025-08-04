import { Request, Response, NextFunction } from "express";
import { saveChecklistToDB } from "../database/operations/checklist";
import { Checklist } from "../database/models/checklist.model";

type ReqType = {
    name: string
    phonenumber: string
    email: string
    immobilientyp: string
    kaufzeitraum: string
    
}

export const saveChecklist = async (req: Request<{}, {}, ReqType>, res: Response, next: NextFunction) => {
    const { name, phonenumber, email, immobilientyp, kaufzeitraum } = req.body;

    if(await saveChecklistToDB(name, phonenumber, email, immobilientyp, kaufzeitraum)) {
        return res.status(200).json({ message: "Erfolgreich gespeichert!" });
    }
    return res.status(401).json({ message: "Error!" });
}  


export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const queryResult: Checklist[] = await Checklist.findAll({
        raw: true
    })

    return res.status(200).json(queryResult);
}

    