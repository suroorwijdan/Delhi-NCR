var readFile = require("fs").readFile,
	stackup = require('stackup'),
	domain = require('domain');

module.exports = scenario;

function scenario(jsonPath, cb) {
	var d = domain.create();

	d.on('error', cb);

	d.run(function () {
		readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
			cb(error, JSON.parse(contents));
		});
	});
	
}