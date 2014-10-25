var module = require('./moduleFile');

if (process.argv.length == 4) {
    module(process.argv[2],process.argv[3],function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result.join('\n'));
        }
    })
} else {
    console.log('Please provide the required arguments');
}
