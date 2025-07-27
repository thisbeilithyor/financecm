import { NextFunction, Request, Response } from "express";
import { saveTrack } from "../database/operations/kpi";

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

    console.log(path);
    saveTrack(timestamp, path, ipaddr, userAgent);
}