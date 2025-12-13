import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const checkPermission = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];   
    
    if(!authHeader){ 
        return res.json( {message: "You have no permission!"} );
    }
    let token = authHeader.split(' ')[1];
    if(token === "null" || !token){
        return res.json( {message: "You have no permission!"} );
    }

    try{
        if(process.env.JWT_TOKEN && process.env.ADMIN_NAME){
            jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
                if (err) return res.sendStatus(403).json({message: "You have no permission!"});
                if (!user) return res.sendStatus(403).json({message: "You have no permission!"});

                let myUser: { id: number, username: string } = user as { id: number, username: string };

                if(myUser.id === 1 && myUser.username === process.env.ADMIN_NAME){
                    console.log("upload permission is ok");
                    return next();
                }
            })
        }
    }catch(err){
        console.log("verifyJWT FAILED:", err);
        return res.json({message: "You have no permission!"});
    }
}