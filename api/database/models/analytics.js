import sequelize from "../util/database.js";
import Sequelize from "sequelize";

const Analytics = sequelize.define("Analytics", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ipaddr: {
        type: Sequelize.STRING,
        allowNull: true
    },
    timestamp: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    path: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userAgent: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

export default Analytics;