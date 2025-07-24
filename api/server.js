import express from "express";

//database
import User from "./database/models/user.js";
import sequelize from "./database/util/database.js";
import Immobilie from "./database/models/immobilie.js";
import Analytics from "./database/models/analytics.js";

import { fn, col, literal, Op } from 'sequelize';

//database queries
import saveRecord from "./database/operations/saveRecord.js";

//auth
import admin_login from "./auth/admin_login.js";
import verifyJWT from "./auth/verifyJWT.js";
import checkPermissionMiddleware from "./auth/checkPermissionMiddleware.js";

//image saving
import multer from "multer";
import FurtherImages from "./database/models/furtherimages.js";

//aplication-requests
import saveNewImmo from "./application-requests/saveNewImmo.js";

const uploader = multer({ dest: 'upload_images/'});

const app = express();
app.use(express.json({ limit: '450mb'}));

app.use('/api/images', express.static('/upload_images'));

const PORT = 5000;
const appName = process.env.APP_NAME;

//init one and only admin user
sequelize.sync(); /*{ force: true})
.then((result) => {
    return User.create({ username: "administrator", admin: true, password: "1111" });
}) */

app.post('/api/admin/login', admin_login);

app.use('/api/verifyJWT', verifyJWT);

app.post('/api/admin/saveNewImmo', checkPermissionMiddleware, uploader.fields([{
    name: 'titleImage', maxCount: 1}, {
    name: 'furtherImages', maxCount: 25} ,{
    name: 'mapImage', maxCount: 1}
    ]), saveNewImmo);

app.listen(PORT, () => {
    console.log(`${appName} is listening on port ${PORT}`);
});

app.get('/api/getImmos', async (req, res) => {
    const queryResult = await Immobilie.findAll({
        raw: true
    })

    res.json(queryResult);
})

app.get('/api/getImmoItem/:objectnr', async (req, res) => {
    const objectnr = req.params.objectnr;

    console.log(objectnr);
    const queryResult = await Immobilie.findOne({
        where: {objectnr: objectnr},
        raw: true
    })
    console.log(queryResult);
    if(queryResult) return res.json(queryResult);
    return res.status(404).json({message: "Dieses Objekt ist nicht vorhanden!"});
})

app.get('/api/getCarouselImages', async (req, res) => {
    const queryResult = await Immobilie.findAll({
        where: { carouselObject: true },
        raw: true,
        attributes: ['city', 'titleImagePath', 'objectnr']
    })

    res.json(queryResult);
})

app.post('/api/track', (req, res) => {
    const path = req.body.path;
    const timestamp = new Date().toISOString();
    const userAgent = req.headers['user-agent'];
    const ipaddr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.sendStatus(204);

    saveRecord(ipaddr, timestamp, path, userAgent);
})

app.get('/api/getVisits', checkPermissionMiddleware, async (req, res) => {
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
})

app.get('/api/getFurtherImages/:objectnr', async (req, res) => {
    const objnr = req.params.objectnr;
    const queryResult = await FurtherImages.findAll({
        where: { objectnr: objnr},
        raw: true,
        attributes: ['imagePath']
    })

    res.json(queryResult);
})