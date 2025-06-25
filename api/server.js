const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const port = 5000;

const appName = process.env.APP_NAME;

app.use('/api/sendTime', (req, res) => {
    console.log("worked");
    res.json({message: "success"});
})

app.use('api/api/sendTime', (req, res) => {
    console.log("worked");
    res.json({message: "success"});
})

app.use('/api/api/sendTime', (req, res) => {
    console.log("worked");
    res.json({message: "success"});
})

app.use('sendTime', (req, res) => {
    console.log("worked");
    res.json({message: "success"});
})

app.use('/sendTime', (req, res) => {
    console.log("worked");
    res.json({message: "success"});
})

app.use('api/sendTime', (req, res) => {
    console.log("worked");
    res.json({message: "success"});
})

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});
