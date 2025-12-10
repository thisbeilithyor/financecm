import dotenv from 'dotenv';

import express, { NextFunction, Request, Response } from "express";
import immoRouter from "./routes/immo";
import authRouter from "./routes/auth";
import kpiRouter from "./routes/kpi";
import customerRequestRouter from "./routes/customerRequest";
import checklistRouter from "./routes/checklist";
import sequelize from "./database/util/database";
import { User } from "./database/models/users.model";
import { Language } from './database/models/language.model';
import { Stateinformation } from './database/models/stateinformation.model';
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

        await autocreateNecessaryMasterdata();
    }catch(err){
        console.log(err);
    }
}

const autocreateNecessaryMasterdata = async () => {
    try{
        const masterDataAlreadyCreated: Stateinformation | null = await Stateinformation.findOne({
            where: {
                metaID: 1
            }
        })

        if(!masterDataAlreadyCreated){
            if(!process.env.ADMIN_PASS || !process.env.ADMIN_NAME) return;
            const user = await User.create({
                username: process.env.ADMIN_NAME,
                admin: true, 
                password: await hashPassword(process.env.ADMIN_PASS)
            } as User)

            const deutsch: Language = await Language.create({
                languageID: 1,
                language: "de"
            } as Language)
            const englisch: Language = await Language.create({
                languageID: 2,
                language: "en"
            } as Language)
            const russisch: Language = await Language.create({
                languageID: 3,
                language: "ru"
            } as Language)
        
            const newStateinf: Stateinformation = await Stateinformation.create({
                metaID: 1,
                metaAlreadyCreated: true
            } as Stateinformation)
        }
    }catch(err){
        console.log(err);
    }
}

startDBConnection();

app.listen(PORT, () => {
    console.log(`${appName} is listening on port ${PORT}`);
})

app.use('/api/immo', immoRouter);

app.use('/api/auth', authRouter);

app.use('/api/kpi', kpiRouter);

app.use('/api/customerRequest', customerRequestRouter);

app.use('/api/checklist', checklistRouter);