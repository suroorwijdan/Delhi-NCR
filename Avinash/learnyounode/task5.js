var fs = require('fs'),
    directory = process.argv[2],
    filter = process.argv[3];

var filterPattern = RegExp('\\.' + filter + '$');

fs.readdir(directory,function(err,files){
    for(i=0;i<files.length;i++){
    var file = files[i];
    if(filterPattern.test(file)){
            console.log(file);
        }
    }
});
