import { NextFunction, Request, Response } from "express";
import { saveCustomerRequest } from "../database/operations/customerRequest";

type ReqContent = {
    name: string
    email: string
    phonenumber: string
    message: string
}

export const createCustomerRequest = async (req: Request<{}, {}, ReqContent>, res: Response, next: NextFunction) => {
    const { name, email, phonenumber, message } = req.body;

    if(await saveCustomerRequest(name, email, phonenumber, message)){
        return res.status(200).json({ message: "Anfrage erfolgreich gespeichert!" });
    }
    return res.status(401).json({ message: "Fehler" });
}