import express from "express";

//database
import User from "./database/models/user.js";
import sequelize from "./database/util/database.js";

//auth
import admin_login from "./auth/admin_login.js";
import verifyJWT from "./auth/verifyJWT.js";
import checkPermissionMiddleware from "./auth/checkPermissionMiddleware.js";

//image saving
import multer from "multer";

//aplication-controllers
import { saveTracking, getVisits} from "./application-controllers/kpiController.js";
import { getFurtherImages, getCarouselImages } from "./application-controllers/imageController.js";
import { saveNewImmo, getImmos, getImmoItem } from "./application-controllers/immoController.js";

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

app.get('/api/getImmos', getImmos);

app.get('/api/getImmoItem/:objectnr', getImmoItem)

app.get('/api/getCarouselImages', getCarouselImages);

app.post('/api/track', saveTracking);

app.get('/api/getVisits', checkPermissionMiddleware, getVisits);

app.get('/api/getFurtherImages/:objectnr', getFurtherImages);