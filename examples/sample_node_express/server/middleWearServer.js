var connect = require("connect"),
    serveStatic = require('serve-static');

var interceptorFunction = function(request, response, next) {
  console.log('url: ' + request.url + ' method: ' + request.method);  
  next();
};

var server = connect()
              .use(interceptorFunction)
              .use(serveStatic('./app'))
              .use(function onRequest(request, response) {
                response.end('hello from connect');
              }).listen(process.env.PORT);