const { WebSocketServer } = require("ws");

const server = new WebSocketServer({
	port: 8080,
});

const sockets = [];

server.on('connection', function connection(socket) {
	sockets.push(socket);
	socket.on('message', function message(data) {
		console.log('received: %s', data);
	});

	socket.send('something');
});