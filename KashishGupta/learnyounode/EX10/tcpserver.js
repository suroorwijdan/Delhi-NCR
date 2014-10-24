var net = require('net'),
    server = net.Server(function (socket) {
        socket.end(getCurrentDate());
    });

// YYYY-MM-DD hh:mm
server.listen(process.argv[2], function () {
    console.log('your server is listening on port: ' + process.argv[2]);
});

function getCurrentDate(date) {
    var date = new Date();
    return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '\n';
}