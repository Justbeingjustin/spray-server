var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 8080;

app.use(express.static(path.join(__dirname,"public")));

io.on('connection', function(socket){
	console.log('new connection made');

console.log('about to send message!');
	socket.emit('message-from-server',{
		greeting:'Hello from Server'
	});
});


app.post("/foo", function(req, res, next) {
    io.sockets.emit('message-from-server',{
		greeting:'Hello from Server Post'
	});
    res.send({});
});


server.listen(port,function(){
console.log('Listening on port' + port);
});