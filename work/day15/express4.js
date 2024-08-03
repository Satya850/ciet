var express = require('Express');
var app = express();
app.get('/:satya',function(req,res){
    res.send('this id you specifies is '+req.params.satya);

});
app.listen(5000);