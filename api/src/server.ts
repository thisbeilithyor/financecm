import dotenv from 'dotenv';

import express, { NextFunction, Request, Response } from "express";
import immoRouter from "./routes/immo";
import sequelize from "./database/util/database";
import { User } from "./database/models/users.model";

dotenv.config();

const app = express();

const PORT: number = 5000;
const appName: string | undefined = process.env.APP_NAME;

//TODO: validate input with middleware 

const startDBConnection = async () =>{
    try{
        await sequelize.sync({ force: true });
        console.log("DB synced");

        const user = await User.create({
            username: "administrator", 
            admin: true, 
            password: "1111"
        } as User)

        console.log(user);
    }catch(err){
        console.log(err);
    }
}

startDBConnection();

app.listen(PORT, () => {
    console.log(`${appName} is listening on port ${PORT}`);
})

app.use('/api/immo', immoRouter);