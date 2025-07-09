import sequelize from "../util/database.js";
import Sequelize from "sequelize";

const FurtherImages = sequelize.define('FurtherImages', {
    imageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: Sequelize.BLOB('long'),
        allowNull: false
    },
    objectnr: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

export default FurtherImages;