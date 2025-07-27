import { Analytics } from "../models/analytics.model"

export const saveTrack = async (timestamp: Date, path: string, ipaddr: string, userAgent: string): Promise<void> => {
    await Analytics.create({
        ipaddr: ipaddr,
        timestamp: timestamp,
        path: path,
        userAgent: userAgent
    } as Analytics)
}