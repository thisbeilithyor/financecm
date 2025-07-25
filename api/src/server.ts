import dotenv from 'dotenv';

import express, { NextFunction, Request, Response } from "express";
import immoRouter from "./routes/immo";
import sequelize from "./database/util/database";

dotenv.config();

const app = express();

const PORT: number = 5000;
const appName: string | undefined = process.env.APP_NAME;

//TODO: validate input with middleware 

sequelize.sync();

app.listen(PORT, () => {
    console.log(`${appName} is listening on port ${PORT}`);
})

app.use('/api/immo', immoRouter);