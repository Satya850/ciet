var  express = require('express');
var app = express();
app.get('/test',function(req,res){
    res.send("welcome to express js world tested by satya in the fun test");
});
app.post('/home',function(req,res){
    res.send("welcome to express js world tested by satya in the home");
});
app.all('/contact',function(req,res){
    res.send("welcome to express js world tested by satyain the contact");
});
app.listen(2224);