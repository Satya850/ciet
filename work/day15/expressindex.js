var express = require('Express');
var app = express();
var things = require('./express3.js');
app.use('/satya',things);
app.listen(4999);