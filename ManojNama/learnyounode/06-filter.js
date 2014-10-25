var fs = require('fs'),
	path = require('path');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, files) {
		if(err) return callback(err);
		
		var filteredFiles = [];
		files.forEach(function(file) {
			if(path.extname(file) === '.' + ext) {
				filteredFiles.push(file);
			}
		});
		return callback(err, filteredFiles);
	});
};
