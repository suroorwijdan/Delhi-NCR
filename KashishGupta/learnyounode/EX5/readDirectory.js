var fs = require('fs'),
    result = '',
    tmp = [];
if (process.argv.length == 4) {
    fs.readdir(process.argv[2], function (err, files) {
        if (err) {
            console.log(err);
        } else {
            var re = new RegExp("\." + process.argv[3]);
            files.forEach(function (data) {
                tmp = data.match(re);
                tmp == null ? '' : result += tmp.input + '\n';
            });
            console.log(result);
        }
    });
} else {
    console.log('Please provide the required arguments');
}
