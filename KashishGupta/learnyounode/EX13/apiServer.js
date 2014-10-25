var http = require('http'),
    url = require('url');

var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url);

    switch (urlObj.pathname) {
        case '/api/parsetime':
            var date = parseQueryAndGiveDateObject(urlObj.query);
            res.end(jsonDateFormat(date, 'default'));
            break;
        case '/api/unixtime':
            var date = parseQueryAndGiveDateObject(urlObj.query);
            res.end(jsonDateFormat(date, 'unixtime'));
            break;

        default :
            res.end('Default API hit');
    }
});

server.listen(process.argv[2]);

function parseQueryAndGiveDateObject(query) {
    var keyValue = query.split('=');
    var date = new Date(keyValue[1]);
    return date;
}

function jsonDateFormat(date, type) {
    var myType = type || 'default';
    var returnObj = {};
    switch (myType) {

        /* { "unixtime": 1376136615474 }*/
        case 'unixtime':
            returnObj = {"unixtime": +date}
            break;

        /*{
         "hour": 14,
         "minute": 23,
         "second": 15
         }*/
        case 'default':
            returnObj = {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            };
            break;
    }
    return JSON.stringify(returnObj);
}