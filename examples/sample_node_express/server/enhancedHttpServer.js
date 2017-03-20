var http = require('http'),
    fs = require('fs'),
    /*path = require('path'),*/
    url = require('url');

http.createServer(function (req, res) {
  console.log('request url ' + req.url);
  var urlParts = url.parse(req.url);
  
  console.log('url pathname ' + urlParts.pathname);
  
  var filePath = '/index.html';
  if(urlParts.pathname !== '/') {
    filePath = urlParts.pathname;
  } 
  var pagePath = './app' + filePath;
  console.log('pagePath '+ pagePath)
  
  fs.readFile(pagePath, function(err, data) {
      if(err) {
          res.writeHead(404);
          res.end('File Not Found.\n');
      } else {
          res.writeHead(200);
          res.end(data);
      }
  });
  
 /* path.exists(pagePath, function fileExists(exists) {
    if(exists) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      fs.createReadStream(pagePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Page Not Found\n');
    }
  });*/
}).listen(process.env.PORT);