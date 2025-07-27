import { Request, Response } from "express";
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


const generateJWTToken = (user: User): string =>{
    if(process.env.JWT_TOKEN){
        const jwt_token: string = process.env.JWT_TOKEN;
        return jwt.sign({ id: user.id, username: user.username },
            jwt_token,
        { expiresIn: '2h'}
        )
    }
    else {
        throw new Error("JWT Token nicht gesetzt!");
    }
}