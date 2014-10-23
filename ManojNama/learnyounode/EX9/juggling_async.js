var http = require('http'),
	concat = require('concat-stream'),
	output = [],
	callbackCounter = 0;

function checkAndPrint() {
	if(callbackCounter === 3) {
		output.forEach(function (data) {
			console.log(data);
		});
	}
}

for (var i = 0; i < 3; i++) {
	(function (idx) {
		http.get(process.argv[2 + idx], function (res) {
			res.setEncoding('utf8');
			res.pipe(concat(function (data) {
				output[idx] = data;
				callbackCounter++;
				checkAndPrint();
			}));
		});
	}(i));
}