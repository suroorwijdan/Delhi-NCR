var fs = require('fs');

var data = fs.readFileSync(process.argv[2]).toString();

console.log(data.split('\n').length - 1);
