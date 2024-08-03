var fs = require('fs');
fs.rename('apple.txt','mango.txt',function(err,file){
    if (err) throw err;
    console.log('file renamed');
});