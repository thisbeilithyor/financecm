import Sequelize from "sequelize";
import mariadb from "mariadb";

const sequelize = new Sequelize('fcm_db', 'user', 'user', {
  host: 'fcm_db',
  port: 3306,
  dialect: 'mariadb'
});

sequelize.authenticate()
  .then(() => console.log('✅ DB connected'))
  .catch(err => console.error('❌ DB connection failed:', err));


export default sequelize;