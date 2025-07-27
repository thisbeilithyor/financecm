import { NextFunction, Request, Response } from "express"
import { ZodObject } from "zod"

export const validateRequest = (schema: ZodObject<any>) => {
    return (req: Request, res: Response, next: NextFunction)=> {
        const result = schema.safeParse(req.body);

        if(!result.success) {
            return res.status(400).json({
                message: "Ungültige Eingabedaten",
                errors: result.error.flatten().fieldErrors,
            });
        }

        req.body = result.data;
        next();
    }
}