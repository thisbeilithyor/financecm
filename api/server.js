const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

const appName = process.env.APP_NAME

app.use('/api/sendTime', (req, res) => {
    console.log(req);
    console.log(res);
    res.json({message: "success"});
})

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});
