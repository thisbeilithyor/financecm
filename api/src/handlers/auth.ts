import { NextFunction, Request, Response } from "express";
import { User } from "../database/models/users.model";
import jwt from "jsonwebtoken";
import { compareHash } from "../miniscripts/hash";

interface loginData {
    username: string;
    password: string;
}

export const adminlogin = async (req: Request<{}, {}, loginData>, res: Response) => {
    const username: string = req.body.username;
    const password: string = req.body.password;

    let user: User | null = await User.findOne({
        where: {
            username: username,
            admin: true
        }
    })

    if(user){
        if(await compareHash(password, user.password)){
            const token: string = generateJWTToken(user);
            res.status(200).json({ token });
        }
    }
    else{
        res.status(401).json( {message: "Falsche Anmeldedaten!"})
    }
}

interface JWTPayload {
    id: number,
    username: string
}

const generateJWTToken = (user: User): string =>{
    if(process.env.JWT_TOKEN){
        const jwt_token: string = process.env.JWT_TOKEN;
        const payload: JWTPayload = {id: user.id, username: user.username};
        return jwt.sign(payload,
            jwt_token,
        { expiresIn: '2h'}
        )
    }
    else {
        throw new Error("JWT Token nicht gesetzt!");
    }
}




export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    if(req.headers['authorization']){
        const authHeader: string = req.headers['authorization'];
        const token: string = authHeader.split(' ')[1];

        if(!token || token === "null") {
            return res.status(401).json( {verified: false} );
        }
        try{
            if(process.env.JWT_TOKEN && process.env.ADMIN_NAME){
                const decoded: JWTPayload = jwt.verify(token, process.env.JWT_TOKEN) as JWTPayload;
                if(decoded && decoded.id === 1 && decoded.username === process.env.ADMIN_NAME){
                    return res.json({ verified: true });
                }
            }
            return res.status(401).json({ verified: false });
        }catch(err){
            console.log("verifyJWT FAILED:", err);
            return res.status(401).json({ verified: false });
        }
    }
}