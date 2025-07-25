import { Sequelize } from "sequelize";

const DB_NAME: string = process.env.DB_NAME || '';
const DB_USER: string = process.env.DB_USER || '';
const DB_PASS: string = process.env.DB_PASS || '';
const DB_HOST: string = process.env.DB_HOST || '';
const DB_PORT: number = parseInt(process.env.DB_PORT || '69', 10);

const sequelize: Sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mariadb'
});

sequelize.authenticate()
  .then(() => console.log('✅ DB connected'))
  .catch(err => console.error('❌ DB connection failed:', err));

export default sequelize;