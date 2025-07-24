import saveRecord from "../database/operations/saveRecord.js";

const saveTracking = (req, res) => {
    const path = req.body.path;
    const timestamp = new Date().toISOString();
    const userAgent = req.headers['user-agent'];
    const ipaddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.sendStatus(204);

    saveRecord(ipaddr, timestamp, path, userAgent);
}

export default saveTracking;