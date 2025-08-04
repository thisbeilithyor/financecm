import mysql, { ConnectionOptions } from "mysql2";
import { Sequelize } from "sequelize-typescript";
import { User } from "../models/users.model";
import { Immobilie } from "../models/immobilie.model";
import { FurtherImages } from "../models/furtherimages.model";
import { Analytics } from "../models/analytics.model";
import { CustomerRequest } from "../models/customerRequest.model";
import { Checklist } from "../models/checklist.model";


const DB_NAME: string = process.env.DB_NAME || '';
const DB_USER: string = process.env.DB_USER || '';
const DB_PASS: string = process.env.DB_PASS || '';
const DB_HOST: string = process.env.DB_HOST || '';
const DB_PORT: number = parseInt(process.env.DB_PORT || '69', 10);

const sequelize: Sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mariadb',
  models: [User, Immobilie, FurtherImages, Analytics, CustomerRequest, Checklist]
});

sequelize.authenticate()
  .then(() => console.log('✅ DB connected'))
  .catch(err => console.error('❌ DB connection failed:', err));

export default sequelize;