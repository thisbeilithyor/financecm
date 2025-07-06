import Sequelize from "sequelize";
import sequelize from "../util/database.js";

const Test = sequelize.define("test", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Test;