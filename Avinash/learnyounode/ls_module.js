var fs = require('fs');

module.exports = function(dirname, filter, callback) {
        var filterPattern = RegExp('\\.' + filter + '$');
        fs.readdir(dirname, function(err, files) {
            if (err) {
                callback(err, null);
            } else {
                result = [];
                for (i = 0; i < files.length; i++) {
                    var file = files[i];
                    if (filterPattern.test(file)) {
                        result.push(file);
                    }
                }
                callback(null, result);
            }
        });
};
