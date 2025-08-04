import { Request, Response, NextFunction } from "express";
import { saveChecklistToDB } from "../database/operations/checklist";


type ReqType = {
    name: string
    phonenumber: string
    email: string
    immobilientyp: string
    kaufzeitraum: string
    
}

export const saveChecklist = async (req: Request<{}, {}, ReqType>, res: Response, next: NextFunction) => {
    const { name, phonenumber, email, immobilientyp, kaufzeitraum } = req.body;

    console.log(name);
    console.log(phonenumber);
    console.log(email);
    console.log(immobilientyp);
    console.log(kaufzeitraum);

    if(await saveChecklistToDB(name, phonenumber, email, immobilientyp, kaufzeitraum)) {
        return res.status(200).json({ message: "Erfolgreich gespeichert!" });
    }
    return res.status(401).json({ message: "Error!" });
}   

    