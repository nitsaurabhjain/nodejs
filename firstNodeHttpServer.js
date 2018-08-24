var http = require('http');
var url = require('url');
var fs = require('fs');
//create a server object:
function  myServer(req, res) {
  var urlParts = url.parse(req.url, true);
 var queryParam =urlParts.query;
  console.log(queryParam);
  var headers = {'Content-Type': 'text/plain'};
  var body = 'Hellow World';
  res.writeHead(200,headers);
  res.write(body); //write a response to the client
  res.end(); //end the response
}
var httpServer = http.createServer(myServer);
httpServer.listen(8080); //the server object listens on port 8080