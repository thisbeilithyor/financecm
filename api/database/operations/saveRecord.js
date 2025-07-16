import Analytics from "../models/analytics.js";
import FurtherImages from "../models/furtherimages.js";
import Sequelize from "sequelize";

const saveRecord = async (ipaddr, timestamp, path, userAgent) => {
    const dbWrite = await Analytics.create({
        ipaddr: ipaddr || "aint here",
        timestamp: timestamp,
        path: path,
        userAgent: userAgent
    })
}

export default saveRecord;