import express from "express";

//database
import User from "./database/models/user.js";
import sequelize from "./database/util/database.js";

//auth
import admin_login from "./auth/admin_login.js";
import verifyJWT from "./auth/verifyJWT.js";

import jwt from "jsonwebtoken";


const app = express();
app.use(express.json({ limit: '200mb'}));

const PORT = 5000;
const appName = process.env.APP_NAME;

//init one and only admin user
sequelize.sync({ force: true})
.then((result) => {
    return User.create({ username: "administrator", admin: true, password: "1111" });
})

app.post('/api/admin/login', admin_login);

app.use('/api/verifyJWT', verifyJWT);
const checkPermission = (req, res, next) => {
    const authHeader = req.headers['authorization'];   
    
    if(!authHeader){ 
        return res.json( {message: "You have no permission!"} );
    }
    let token = authHeader.split(' ')[1];
    if(token === "null" || !token){
        return res.json( {message: "You have no permission!"} );
    }

    try{
        jwt.verify(token, "aslfjindid", (err, user) => {
            if(err){
                return res.json({message: "You have no permission!"});
            }
            if(user.id){
                if(user.id === 1 && user.username === 'administrator'){
                    console.log("upload permission is ok");
                    next();
                }
            }
            return res.json({message: "You have no permission!"});
        })
    }catch(err){
        console.log("verifyJWT FAILED:", err);
        return res.json({message: "You have no permission!"});
    }
}
app.use('/api/saveNewImmoForm', checkPermission, (req, res) => {
    console.log(req.body);
})



app.listen(PORT, () => {
    console.log(`${appName} is listening on port ${PORT}`);
});
