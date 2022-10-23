import { WebSocketServer } from "ws";
import { v4 as uuidv4 } from 'uuid';

const server = new WebSocketServer({
	port: 8080,
});

const sockets = [];

server.on('connection', function connection(socket) {
	sockets.push(socket);
	socket.id = uuidv4();

	socket.on('message', function message(data) {
		console.log('received: %s', data);
	});

	socket.send('something');
});