var combine = require('stream-combiner');
var through = require('through');
var split = require('split');
var zip = require('zlib');

module.exports = function () {
	return combine(split(), bookSorter(), zip.createGzip());
};

function bookSorter() {
	var current = null;
	return through(function(data) {
			if (data.length === 0) return;
			data = JSON.parse(data);

			if (data.type === "genre") {
		      if (current) {
					this.queue(JSON.stringify(current) + "\n");
		      }
				current = {name: data.name, books: []};
			} else {
				current.books.push(data.name);
			}
		},
		function() {
			this.queue(JSON.stringify(current) + "\n");
			this.queue(null);
		}
	);
}