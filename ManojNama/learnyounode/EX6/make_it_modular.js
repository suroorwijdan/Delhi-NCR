var FileFilter = require('./filter');

FileFilter(process.argv[2], process.argv[3], function(err, files) {
	if(err) return;

	files.forEach(function(file) {
		console.log(file);
	});
});
