var fs = require('fs');

if(process.argv.length == 3){
    var fileData = fs.readFileSync(process.argv[2]);
    var buf = new Buffer(fileData);
    console.log(buf.toString().split('\n').length-1);
}else{
    console.log('Please provide file-path');
}

