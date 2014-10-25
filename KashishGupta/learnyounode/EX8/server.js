var http = require('http'),
    cs = require('concat-stream');

http.get(process.argv[2], function (res) {
    res.setEncoding('utf8');

    res.pipe(cs(function (dta) {
        console.log(dta.length);
        console.log(dta);
    }));

    res.on('error', function (err) {
        console.log(err);
    });
});