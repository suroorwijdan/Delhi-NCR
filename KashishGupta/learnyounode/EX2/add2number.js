function sum(arr) {
    var total = 0;
    arr.forEach(function (data) {
        total += +data;
    });
    return total;
}

console.log(sum(process.argv.slice(2,process.argv.length)));