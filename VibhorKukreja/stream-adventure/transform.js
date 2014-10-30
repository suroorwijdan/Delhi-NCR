var through = require('through');
var tr = through(function (buf) {
var self=this;
//console.log("buffer >>>> ",buf);
this.queue(buf.toString().toUpperCase());
this.pause();
setTimeout(function(){ 
self.resume()}
,5000);
});
process.stdin.pipe(tr).pipe(process.stdout);
