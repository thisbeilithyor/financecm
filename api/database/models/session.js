import Sequelize from "sequelize";
import sequelize from "../util/database";

const Session = sequelize.define("session", {
    sid: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER
    },
    expires: {
        type: Sequelize.DATE
    },
    data: {
        type: Sequelize.TEXT
    }
})

export default Session;