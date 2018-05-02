var fs = require('fs');

//Sync will block the code

//fs.unlink('writeMe.txt');
//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data);
    });
});