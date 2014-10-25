var http = require('http'),
	url = require('url');

var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	var urlObj = url.parse(req.url, true);

	if(urlObj.pathname == '/api/parsetime' && urlObj.query.iso) {
		var _dt = new Date(urlObj.query.iso);
		res.end(JSON.stringify({
			hour: _dt.getHours(), 
			minute: _dt.getMinutes(), 
			second: _dt.getSeconds()
		}));
	} else if(urlObj.pathname == '/api/unixtime' && urlObj.query.iso) {
		var _dt = +new Date(urlObj.query.iso);
		res.end(JSON.stringify({unixtime: _dt}));
	} else {
		res.end("Nothing here ...");
	}
});

server.listen(Number(process.argv[2]));