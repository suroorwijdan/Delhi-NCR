var sum = 0,
	args = process.argv;
	
for (var i = 2; i < args.length; i++) {
	sum += Number(args[i]);
}

console.log(sum);
