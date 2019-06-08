'use strict';

const bodyparser = require('body-parser')
const express = require('express');
const routes = require('./router/router');
// Constants
const PORT = 8081;
const HOST = '0.0.0.0';
const app = express();
// App
// 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
// /


app.use('/', routes)



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
