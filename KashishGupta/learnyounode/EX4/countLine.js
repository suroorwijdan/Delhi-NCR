var fs = require('fs');

if(process.argv.length == 3){
    fs.readFile(process.argv[2], function (err,fileData) {
        var buf = new Buffer(fileData);
        console.log(buf.toString().split('\n').length-1);
    });
}else{
    console.log('Please provide file-path');
}

