const { WebSocketServer } = require("ws");

const server = new WebSocketServer({
	port: 8080,
});

server.on('connection', function connection(socket) {
	socket.on('message', function message(data) {
		console.log('received: %s', data);
	});

	socket.send('something');
});