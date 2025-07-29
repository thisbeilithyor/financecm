import { NextFunction, Request, Response } from "express";
import { saveTrack, reqVisitsTodayDB } from "../database/operations/kpi";
import { start } from "repl";
import { Analytics } from "../database/models/analytics.model";
import { VisitsTodayDto } from "../dtos/VisitsToday.dto";

export const track = (req: Request, res: Response, next: NextFunction) => {
    const path: string = req.body.path;
    const timestamp: Date = new Date();
    let userAgent: string = '';
    if(req.headers['user-agent']){
        userAgent = req.headers['user-agent'];
    }
    let ipaddr: string = '';
    if(req.headers['x-forwarded-for']){
        ipaddr = req.headers['x-forwarded-for'][0].trim();
    }
    else {
        if(req.socket.remoteAddress){
            ipaddr =  req.socket.remoteAddress;
        }
    }
    res.sendStatus(204);

    saveTrack(timestamp, path, ipaddr, userAgent);
}


export const getVisits = async (req: Request, res: Response, next: NextFunction) => {
    const targetDate = new Date();

    const startOfDay: Date = new Date(targetDate.setHours(0, 0, 0, 0));
    const endOfDay: Date = new Date(targetDate.setHours(23, 59, 59, 999));

    const queryResult: VisitsTodayDto[] = await reqVisitsTodayDB(startOfDay, endOfDay);

    const activeHours: number[] = [];
    const activeNumbers = [];
    for(const value of queryResult){
        activeHours.push(value.hour);
        activeNumbers.push(value.numberOfItems);
    }

    const labels = [];
    const data = [];

    let i: number;
    for(i=1; i<25; i++){
        labels[i-1] = i;
        data[i-1] = 0;
    }

    for(i=0; i<data.length; i++){
        let j: number;
        let success: boolean = false;
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