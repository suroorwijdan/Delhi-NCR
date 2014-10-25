var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
	var counts = {};
	return duplexer(through(write, end), counter);

	function write (obj) {
		counts[obj.country] = (counts[obj.country] || 0) + 1;
	}
	function end () {
		counter.setCounts(counts);
	}
};