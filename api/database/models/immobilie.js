import { Sequelize } from "sequelize";
import sequelize from "../util/database.js";

const Immobilie = sequelize.define("immobilie", {
    objektnr: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }
})