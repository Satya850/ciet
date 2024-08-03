var fs = require('fs');
fs.appendFile('apple.txt','yes , hello understand or not',function(err,file){
    if (err) throw err;
    console.log('Saved!');
});