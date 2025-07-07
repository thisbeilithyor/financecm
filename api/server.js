import express from "express";

//database
import User from "./database/models/user.js";
import sequelize from "./database/util/database.js";

//auth
import admin_login from "./auth/admin_login.js";
import verifyJWT from "./auth/verifyJWT.js";

const app = express();
app.use(express.json());

const PORT = 5000;
const appName = process.env.APP_NAME;

//init one and only admin user
sequelize.sync({ force: true})
.then((result) => {
    return User.create({ username: "administrator", admin: true, password: "1111" });
})

app.post('/api/admin/login', admin_login);

app.use('/api/verifyJWT', verifyJWT);

app.listen(PORT, () => {
    console.log(`${appName} is listening on port ${PORT}`);
});
