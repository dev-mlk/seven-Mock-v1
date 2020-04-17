var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('grp.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(2045);
console.log('Your localhost on:2045/');


fs.appendFile('grp.txt', 'YYDM', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
