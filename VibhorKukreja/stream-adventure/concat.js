    var concat = require('concat-stream');
    
    process.stdin.pipe(concat(function (src) {
        var s = src.toString().split('').reverse().join('');
        console.log(s);
    }));

/*var through = require('through');
var tr = through(function (buf) {
var str =buf.toString();
function reverse(s){
    return s.split("").reverse().join("");
}
this.queue(reverse(str));
});
process.stdin.pipe(tr).pipe(process.stdout); */
