import { NextFunction, Request, Response } from "express";
import { CreateImmoDto } from "../dtos/CreateImmo.dto";

export const getImmos = (req: Request, res: Response, next: NextFunction) => {
    console.log("has been called!");
    req.body.email;
    res.json({ message: "getImmos here!" });
}

export const createImmo = (req: Request, res: Response, next: NextFunction) => {

    res.json({ message: "saveImmo" });
}