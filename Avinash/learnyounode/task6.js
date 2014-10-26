var lslib = require('./ls_module');

var dirname = process.argv[2];
var ext = process.argv[3];

lslib(dirname, ext, function(err, files) {
    if(err){
        console.log(err);
        return;
    }
    if(files.length>0){
      for (i = 0; i < files.length; i++) {
        console.log(files[i]);
        }

    }                
});
