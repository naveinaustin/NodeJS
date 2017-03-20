var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This is a simple Http Server - test\n');
  res.end();
}).listen(process.env.PORT);