var through = require('through'),
	http = require('http');

var server = http.createServer(function (req, res) {
	var tr = through(write, end);
	if(req.method === 'POST') {
		req.pipe(tr).pipe(res);
	}
});

server.listen(Number(process.argv[2]));

function write (buf) { 
	this.queue(buf.toString().toUpperCase()); 
}
function end () { 
	this.queue(null); 
}