var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req,res){
	res.sendfile(__dirname+"/"+"index.html");
});

//Whenever someone connects this gets executed 
io.on('connection', function(socket){
	console.log('A user connected');

	//Send a message when 
	setInterval(function (){
		//sending a object when emting an event
		socket.emit('event',{greetings: 'hello'+'<br>'});
	}, 4000);


	//Whenever someone disconnects this piece of code executed
	socket.on('disconnect', function(){
		console.log('A user disconnected');
	});
});

//here use server.listen if you are using the code commented at the top of 
http.listen(3000, function(){
	console.log('listening on : 3000');
});

