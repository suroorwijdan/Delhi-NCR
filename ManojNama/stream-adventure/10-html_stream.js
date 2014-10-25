var trump = require('trumpet')();
var tr = require('through')(write, end);
var fs = require('fs');
var stream = trump.select('.loud').createStream();

stream.pipe(tr).pipe(stream);

process.stdin.pipe(trump).pipe(process.stdout);

function write (buf) { 
	this.queue(buf.toString().toUpperCase()); 
}
function end () { 
	this.queue(null); 
}