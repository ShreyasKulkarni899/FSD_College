var http=require('http');
http.createServer(function(request, response){
response.writeHead(200,{'content-type':'text/plain'});
response.write("Hello");
response.end();
}).listen(5000);
console.log("Server Created.");
