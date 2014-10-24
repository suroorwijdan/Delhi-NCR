var http = require('http'),
    cs = require('concat-stream'),
    async = require('async'),
    tasks = [];

if(process.argv.length != 5){
    console.log('Insufficient arguments');
    return;
}

function hitUrlGetData(url,callback) {
    http.get(url, function (res) {
        res.setEncoding('utf8');

        res.pipe(cs(function (dta) {
            callback(null,dta);
        }));

        res.on('error', function (err) {
          callback(err,null);
        });
    });
}

tasks.push(function(callback){
    hitUrlGetData(process.argv[2],callback);
});

tasks.push(function(callback){
    hitUrlGetData(process.argv[3],callback);
});

tasks.push(function(callback){
    hitUrlGetData(process.argv[4],callback);
});

async.series(tasks,function (err, result) {
    if(err){
        console.log(err);
    }else{
        result.forEach(function (data) {
            console.log(data);
        })
    }
});

