module.exports = exports = function (dirPath, fileExtention, callback) {
    var fs = require('fs'),
        result = [],
        tmp = [];

    fs.readdir(dirPath, function (err, files) {
        if (err) {
            callback(err, null);
        } else {
            var re = new RegExp("\." + fileExtention);
            files.forEach(function (data) {
                tmp = data.match(re);
                tmp == null ? '' : result.push(tmp.input);
            });
            callback(null, result);
        }
    });
};