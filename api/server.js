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

const uploader = multer({ dest: 'upload_images/'});

const app = express();
app.use(express.json({ limit: '450mb'}));

const PORT = 5000;
const appName = process.env.APP_NAME;

//init one and only admin user
sequelize.sync({ force: true})
.then((result) => {
    return User.create({ username: "administrator", admin: true, password: "1111" });
})

app.post('/api/admin/login', admin_login);

app.use('/api/verifyJWT', verifyJWT);

/*
app.post('/api/admin/saveNewImmoForm', checkPermissionMiddleware, async (req, res) => {
    const { mapImage64, titleImage64, furtherImages64, formData } = req.body;
    saveImmobilie(mapImage64, titleImage64, formData, furtherImages64, res);
})*/

app.post('/api/admin/saveTitleImage', checkPermissionMiddleware, uploader.fields([{
    name: 'titleImage', maxCount: 1}, {
    name: 'furtherImages', maxCount: 25} ,{
    name: 'mapImage', maxCount: 1}
    ]), (req, res) => {
    let {formData} = req.body;
    formData = JSON.parse(formData);
    let furtherImagesPaths = [];
    for(const value of req.files.furtherImages){
        furtherImagesPaths.push(value.filename);
    }
    return saveImmobilie(req.files.mapImage[0].filename, req.files.titleImage[0].filename, formData, furtherImagesPaths, res);
})

app.listen(PORT, () => {
    console.log(`${appName} is listening on port ${PORT}`);
});

app.get('/api/getImmos', async (req, res) => {
    const queryResult = await Immobilie.findOne({
        attributes: ['objectnr', 'city', 'titleImage'],
        raw: true
    })

    res.json(queryResult);
})
