var through = require('through');

var tr = through(function write(data) {
    this.queue(data.toString().toUpperCase());
}, function end() {
    this.queue(null);
});

process.stdin.pipe(tr).pipe(process.stdout);