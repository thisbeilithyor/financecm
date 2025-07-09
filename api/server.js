import express from "express";

//database
import User from "./database/models/user.js";
import sequelize from "./database/util/database.js";

//database queries
import saveImmobilie from "./database/operations/saveImmobilie.js";

//auth
import admin_login from "./auth/admin_login.js";
import verifyJWT from "./auth/verifyJWT.js";
import checkPermissionMiddleware from "./auth/checkPermissionMiddleware.js";


const app = express();
app.use(express.json({ limit: '450mb'}));

const PORT = 5000;
const appName = process.env.APP_NAME;

//init one and only admin user
sequelize.sync();/*{ force: true})
.then((result) => {
    return User.create({ username: "administrator", admin: true, password: "1111" });
})*/

app.post('/api/admin/login', admin_login);

app.use('/api/verifyJWT', verifyJWT);

app.post('/api/admin/saveNewImmoForm', checkPermissionMiddleware, async (req, res) => {
    const { mapImage64, titleImage64, furtherImages64, formData } = req.body;
    saveImmobilie(mapImage64, titleImage64, formData, furtherImages64, res);
    
})

app.listen(PORT, () => {
    console.log(`${appName} is listening on port ${PORT}`);
});
