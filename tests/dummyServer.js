var http = require("http"),
    fs = require("fs");

var server = http.createServer(function(request, response) {

    if(request.url === '/kill'){
        response.end();
        process.exit(0);
    }

    if(request.url === '/good.txt'){
      response.writeHead(201, { 'content-type': 'text/html' });
      response.end('good\n');
      return;
    }

    response.writeHead(404);
    response.end();
    return;

}).listen(8888);
