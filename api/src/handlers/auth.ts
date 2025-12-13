import { NextFunction, Request, Response } from "express";
import { User } from "../database/models/users.model";
import jwt from "jsonwebtoken";
import { compareHash } from "../miniscripts/hash";

interface loginData {
    username: string;
    password: string;
}

export const adminlogin = async (req: Request<{}, {}, loginData>, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;

    let user: User | null = null;

    try{
        user = await User.findOne({
            where: {
                username: username,
                admin: true
            }
        })
    } catch(err) {
        return res.status(500).send();
    }

    if(!user){
        return res.status(401).json( {message: "Falsche Anmeldedaten!"});
    }

    try{
        if(await compareHash(password, user.password)){
            const token: string = generateJWTToken(user);

            res.cookie("accessToken", token, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 7200000 //2 hours
            })

            return res.status(200).json({ message: "Login erfolgreich!" });
        }
        else{
            return res.status(401).json( {message: "Falsche Anmeldedaten!"});
        }
    } catch (err) {
        return res.status(500).send();
    }
        
}

interface JWTPayload {
    id: number,
    username: string
}

const generateJWTToken = (user: User): string =>{
    try {
        if(process.env.JWT_TOKEN){
            const payload: JWTPayload = {id: user.id, username: user.username};

            return jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: '2h'})
        }
        else {
            throw new Error("JWT Token nicht gesetzt!");
        }
    } catch (err) {
        throw new Error("Error in function generateJWTToken (auth.ts): "+err);
    }
}




export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const accessToken: string = req.cookies.accessToken;

    if(!accessToken) return res.sendStatus(401);
    if(!process.env.JWT_TOKEN) return res.sendStatus(500);

    try {
        jwt.verify(accessToken, process.env.JWT_TOKEN, (err, user) => {
            if (err) return res.sendStatus(401);
            if (!user) return res.sendStatus(401);
            if (typeof user === "string") return res.sendStatus(401);

            if (user.id === 1 && user.username === process.env.ADMIN_NAME) return res.sendStatus(200);
        })

    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

export const logout = (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "strict"
    })

    return res.status(200).json( { message: "Erfolgreich ausgeloggt!" } );
}