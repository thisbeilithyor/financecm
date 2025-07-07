import express from "express";

//database
import testModel from "./database/models/test.js";
import User from "./database/models/user.js";
import sequelize from "./database/util/database.js";
import jwt from "jsonwebtoken";

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
.then(customer => {
    customerId = customer.id;
    console.log(customer);
})
.catch(err => {
    console.log("ERROR");
    console.log(err);
});

app.use('/api/sendTime', authMiddleware, async (req, res) => {
    if(customerId){
        c = await testModel.findAll({ where: 2 });
    }
    res.json({message: "success", allC: c});
})

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({ error: "No token provided" });
    } 

    const token = authHeader.split(' ')[1];
    jwt.verify(token, "aslfjindid", (err, decoded) => {
        if (err) return res.status(401).json( {error: "Token invalid"} );
        console.log(req);
        console.log(decoded);
        console.log(err);
        console.log(req.user);
        req.user = decoded;
        console.log(req.user);
    })
}

app.post('/api/admin/login', async(req, res) => {
    let bodySet = false;
    let currentUsername, currentPassword;
    if(req.body){
        const { username, password } = req.body;
        currentUsername = username;
        currentPassword = password;
        console.log(username);
        console.log(password);
        bodySet = true;
    }
    console.log(currentUsername);
    let user;
    if(bodySet){
        user = await User.findOne({ 
            where: {
                username: currentUsername,
                password: currentPassword,
                admin: true
            }
        })
    }

    if(user){
        console.log("Login erfolgreich für ", currentUsername);

        const token = jwt.sign(
            { id: user.id, username: currentUsername },
            "aslfjindid"
        )

        res.json({ token });
    } else {
        res.json({ message: "Falsche Anmeldedaten!" });
        console.log("Falsche credentials!");
    }
})

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
