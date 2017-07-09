var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname,"public")));

io.on('connection', function(socket){
	console.log('new connection made');

console.log('about to send message!');
	socket.emit('message-from-server',{
		greeting:'Hello from Server'
	});
});

app.get('/', function(req, res) {
  res.send("Hello World");
});


app.post("/foo", function(req, res, next) {
    io.sockets.emit('message-from-server',{
		greeting:'Hello from Server Post'
	});
    res.send({});
});


server.listen(app.get('port'),function(){
 console.log('Node app is running on port', app.get('port'));
});