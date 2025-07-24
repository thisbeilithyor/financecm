import Analytics from "../database/models/analytics.js";
import { fn, col, Op } from 'sequelize';
import saveRecord from "../database/operations/saveRecord.js";


export const getVisits = async (req, res) => {
    const targetDate = new Date();

    const startOfDay = new Date(targetDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(targetDate.setHours(23, 59, 59, 999));

    const queryResult = await Analytics.findAll({
        attributes: [
            'timestamp',
            [fn('HOUR', col('timestamp')), 'hour'],
            [fn('COUNT', col('id')), 'numberOfItems']
        ],
        where: {
            timestamp: {
                [Op.between]: [startOfDay, endOfDay]
            }
        },
        group: [fn('HOUR', col('timestamp'))],
        raw: true
    })

    const activeHours = [];
    const activeNumbers = [];
    for(const value of queryResult){
        activeHours.push(value.hour);
        activeNumbers.push(value.numberOfItems);
    }

    const labels = [];
    const data = [];

    let i;
    for(i=1; i<25; i++){
        labels[i-1] = i;
        data[i-1] = 0;
    }

    for(i=0; i<data.length; i++){
        let j;
        let success = false;
        for(j=0; j<activeHours.length; j++){
            if(i === activeHours[j]){
                data[i] = activeNumbers[j];
                success = true;
                break;
            }
        }
        if(!success){
            data[i] = 0;
        }
    }

    res.status(200).json( {labels, data} );
}


export const saveTracking = (req, res) => {
    const path = req.body.path;
    const timestamp = new Date().toISOString();
    const userAgent = req.headers['user-agent'];
    const ipaddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.sendStatus(204);

    saveRecord(ipaddr, timestamp, path, userAgent);
}