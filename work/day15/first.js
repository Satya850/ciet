var  express = require('express');
var app = express();
app.get('/satya',function(req,res){
    res.send("welcome to express js world tested by satya");
});
app.listen(1234);