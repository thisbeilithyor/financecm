import Sequelize from "sequelize";
import sequelize from "../util/database.js";

const Immobilie = sequelize.define("Immobilie", {
    objectnr: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    house: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    squareMeters: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    bathroom: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    supermarket: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    electricity: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    water: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    pool: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    garden: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    atOcean: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    paymentDuration: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    buildingFinished: {
        type: Sequelize.STRING,
        allowNull: true
    },
    uberDasProjekt: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    uberStandort: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    titleImagePath: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mapImagePath: {
        type: Sequelize.STRING,
        allowNull: true
    },
    carouselObject: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
});

export default Immobilie;
