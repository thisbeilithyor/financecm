import dotenv from 'dotenv';

import express, { NextFunction, Request, Response } from "express";
import immoRouter from "./routes/immo";
import authRouter from "./routes/auth";
import kpiRouter from "./routes/kpi";
import customerRequestRouter from "./routes/customerRequest";
import checklistRouter from "./routes/checklist";
import sequelize from "./database/util/database";
import { User } from "./database/models/users.model";
import { hashPassword } from './miniscripts/hash';

dotenv.config();

const app = express();
app.use(express.json());

const PORT: number = 5000;
const appName: string | undefined = process.env.APP_NAME;

const dev: boolean = true;

//TODO: validate input with middleware 

const startDBConnection = async () =>{
    try{
        await sequelize.sync({ force: false, alter: true });
        console.log("DB synced");

        const user = await User.create({
            username: "administrator", 
            admin: true, 
            password: await hashPassword("1111")
        } as User)
    }catch(err){
        console.log(err);
    }
}

startDBConnection();

app.listen(PORT, () => {
    console.log(`${appName} is listening on port ${PORT}`);
})

app.use('/api/images', express.static('/upload_images'));

app.use('/api/immo', immoRouter);

app.use('/api/auth', authRouter);

app.use('/api/kpi', kpiRouter);

app.use('/api/customerRequest', customerRequestRouter);

app.use('/api/checklist', checklistRouter);