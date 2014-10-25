var crypto = require('crypto');
var through = require('through');
var tar = require('tar').Parse();
var unzip = require('zlib').createGunzip();

var decrypt = crypto.createDecipher(process.argv[2], process.argv[3]);

tar.on('entry', function (entry) {
	if(entry.type !== 'File') return;

	entry.pipe(crypto.createHash('md5')).pipe(through(function write (buf) {
		process.stdout.write(buf.toString('hex') + ' ' + entry.path + '\n');
	}));
});
process.stdin.pipe(decrypt).pipe(unzip).pipe(tar);