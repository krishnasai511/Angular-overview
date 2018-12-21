'use strict'

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/a4app'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/a4app/index.html'));
})

app.listen(process.env.Port || 8080, () => {
    console.log("App is running successfully");
})