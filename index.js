var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

consign()
    .include("config/banco.js")
    .then('routes')
    .then("config/boot.js")
    .into(app);


