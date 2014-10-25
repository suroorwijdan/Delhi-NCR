var through = require('through'),
    split = require('split'),
    count = 0;

var tr = through(function write(data) {
    data = data.toString();
    var str = count++ % 2 ? data.toUpperCase() : data.toLowerCase();
    this.queue(str + '\n');
}, function end() {
    this.queue(null);
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);