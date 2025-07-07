import express from "express";

//database
import testModel from "./database/models/test.js";
import User from "./database/models/user.js";
import sequelize from "./database/util/database.js";
import jwt from "jsonwebtoken";
import admin_login from "./auth.js";

const app = express();
app.use(express.json());


const port = 5000;

const appName = process.env.APP_NAME;

let customerId = null;
let c = null;

sequelize.sync({ force: true})
.then((result) => {
    return User.create({ username: "administrator", admin: true, password: "1111" });
})

app.post('/api/admin/login', admin_login);

app.use('/api/verifyJWT', (req, res) => {
    const authHeader = req.headers['authorization'];    
    const token = authHeader.split(' ')[1];

    if(token === "null"){
        return res.json( {verified: false} );
    }
    try{
        jwt.verify(token, "aslfjindid", (err, user) => {
            if(err){
                return res.json({ verified: false });
            }
            if(user.id){
                if(user.id === 1 && user.username === 'administrator'){
                    return res.json({ verified: true });
                }
            }
            return res.json({ verified: false });
        })
    }catch(err){
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});
