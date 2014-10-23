var through = require('through'),
	split = require('split'),
	tr = through(write, end),
	flag = false;

process.stdin.
	pipe(split()).
	pipe(tr).
	pipe(process.stdout);

function write (buf) { 
	line = buf.toString();
	line = flag ? line.toUpperCase() : line.toLowerCase();
	this.queue(line + '\n');
	flag = !flag;
}
function end () { 
	this.queue(null); 
}