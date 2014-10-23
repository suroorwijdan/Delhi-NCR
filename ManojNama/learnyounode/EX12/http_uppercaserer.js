var http = require('http'),
	fs = require('fs'),
	map = require('through2-map');

var server = http.createServer(function (req, res) {
	if(req.method === 'POST') {
		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
});

server.listen(process.argv[2]);