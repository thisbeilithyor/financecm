import express from "express";

//database
import User from "./database/models/user.js";
import sequelize from "./database/util/database.js";
import Immobilie from "./database/models/immobilie.js";
//database queries
import saveImmobilie from "./database/operations/saveImmobilie.js";

//auth
import admin_login from "./auth/admin_login.js";
import verifyJWT from "./auth/verifyJWT.js";
import checkPermissionMiddleware from "./auth/checkPermissionMiddleware.js";

import multer from "multer";

import path from "path";

const uploader = multer({ dest: 'upload_images/'});

const app = express();
app.use(express.json({ limit: '450mb'}));

app.use('/api/images', express.static('/upload_images'));

const PORT = 5000;
const appName = process.env.APP_NAME;

//init one and only admin user
sequelize.sync();/*{ force: true})
.then((result) => {
    return User.create({ username: "administrator", admin: true, password: "1111" });
})*/

app.post('/api/admin/login', admin_login);

app.use('/api/verifyJWT', verifyJWT);

app.post('/api/admin/saveNewImmo', checkPermissionMiddleware, uploader.fields([{
    name: 'titleImage', maxCount: 1}, {
    name: 'furtherImages', maxCount: 25} ,{
    name: 'mapImage', maxCount: 1}
    ]), (req, res) => {
    let {formData} = req.body;
    formData = JSON.parse(formData);
    let furtherImagesPaths = [];
    if(req.files.furtherImages){
        for(const value of req.files.furtherImages){
            furtherImagesPaths.push(value.filename);
        }
    }
    let mapImageFilename = null;
    if(req.files.mapImage){
        mapImageFilename = req.files.mapImage[0].filename;
    }

    let titleImageFilename = null;
    if(req.files.titleImage){
        titleImageFilename = req.files.titleImage[0].filename;
    }
    return saveImmobilie(mapImageFilename, titleImageFilename, formData, furtherImagesPaths, res);
})

app.listen(PORT, () => {
    console.log(`${appName} is listening on port ${PORT}`);
});

app.get('/api/getImmos', async (req, res) => {
    const queryResult = await Immobilie.findAll({
        raw: true
    })

    res.json(queryResult);
})
