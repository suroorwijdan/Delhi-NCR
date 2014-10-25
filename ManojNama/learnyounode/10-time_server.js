var net = require('net');

var server = net.createServer(function (socket) {
	var dt = new Date();
	var dtString = dt.getFullYear() + '-' + 
						pad((dt.getMonth() + 1)) + '-' + 
						pad(dt.getDate()) + ' ' + 
						pad(dt.getHours()) + ':' + 
						pad(dt.getMinutes());
	return socket.end(dtString + '\n');
});

function pad(i) {
    return (i < 10 ? '0' : '') + i;
}

server.listen(Number(process.argv[2]));