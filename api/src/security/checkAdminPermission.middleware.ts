import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const checkPermission = (req: Request, res: Response, next: NextFunction) => {
    const accessToken: string = req.cookies.accessToken;

    if(!accessToken) return res.status(401).json( {message: "You have no permission!"} );
    if(!process.env.JWT_TOKEN) return res.sendStatus(500);

    try {
        jwt.verify(accessToken, process.env.JWT_TOKEN, (err, user) => {
            if (err) return res.status(401).json( {message: "You have no permission!"} );
            if (!user) return res.status(401).json( {message: "You have no permission!"} );
            if (typeof user === "string") return res.status(401).json( {message: "You have no permission!"} );

            if (user.id === 1 && user.username === process.env.ADMIN_NAME) return next();
        })

    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}