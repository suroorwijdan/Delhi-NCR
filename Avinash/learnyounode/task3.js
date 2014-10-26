var fs = require('fs');

var filename = process.argv[2];

var file = fs.readFileSync(filename);

console.log(file.toString().split('\n').length-1);
