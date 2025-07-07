import sequelize from "./database.js";
//import connectSessionSequelize from 'connect-session-sequelize';
import session from 'express-session';
import connectSessionSequelize from 'connect-session-sequelize';
const SequelizeStore = connectSessionSequelize(session.Store);

const store = new SequelizeStore({
  db: sequelize,
  table: 'Session',
  checkExpirationInterval: 15 * 60 * 1000,
  expiration: 24 * 60 * 60 * 1000
});

export default store;