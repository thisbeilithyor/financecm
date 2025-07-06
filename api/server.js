import express from "express";

//database
import testModel from "./database/models/test.js";
import User from "./database/models/user.js";
import sequelize from "./database/util/database.js";


const app = express();
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



app.use('/api/sendTime', async (req, res) => {
    if(customerId){
        c = await testModel.findAll({ where: 2 });
    }
    res.json({message: "success", allC: c});
})

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});
