var http = require('http');

var port1 = 7000
var port2 = 7500;


var server1 = http.createServer(function(request, response){
	response.end('I am server 1 ' + request.url);
});

server1.listen(port1, function(){
	console.log('server listening on: http://localhost:' + port1);
	console.log('hey there nice fella!');
});

var server2 = http.createServer(function(request, response){
	response.end('I am server 2 ' + request.url);
})
server2.listen(port2, function(){
	console.log('server listening on: http://localhost:' + port2);
	console.log('rude!');
});