import { Analytics } from "../models/analytics.model"
import { fn, col, Op } from 'sequelize';
import { VisitsTodayDto } from "../../dtos/VisitsToday.dto";

export const saveTrack = async (timestamp: Date, path: string, ipaddr: string, userAgent: string): Promise<void> => {
    await Analytics.create({
        ipaddr: ipaddr,
        timestamp: timestamp,
        path: path,
        userAgent: userAgent
    } as Analytics)
}

export const reqVisitsTodayDB = async (startOfDay: Date, endOfDay: Date): Promise<VisitsTodayDto[]> => {
    const queryResult: unknown[] = await Analytics.findAll({
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

    return queryResult as VisitsTodayDto[];
}