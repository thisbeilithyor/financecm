import sequelize from "../util/database.js";
import Sequelize from "sequelize";

const FurtherImages = sequelize.define('FurtherImages', {
    imageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    imagePath: {
        type: Sequelize.STRING,
        allowNull: false
    },
    objectnr: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

export default FurtherImages;