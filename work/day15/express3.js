var  express = require('express');
var router = express.Router();
router.get('/test',function(req,res){
    res.send("welcome to express js world tested by satya in the fun test");
});
router.post('/home',function(req,res){
    res.send("welcome to express js world tested by satya in the home hello");
});
module.exports = router;