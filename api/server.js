import express from "express";

//database
import testModel from "./database/models/test.js";
import sequelize from "./database/util/database.js";


const app = express();
const port = 5000;

const appName = process.env.APP_NAME;

sequelize.sync().then((result) => console.log(result))
.catch(err => {
    console.log("ERROR");
    console.log(err);
});

app.use('/api/sendTime', (req, res) => {
    res.json({message: "success"});
})

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});
