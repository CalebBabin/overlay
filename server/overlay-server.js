import { WebSocketServer } from "ws";
import { v1 as uuidv1 } from 'uuid';

import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/streaming-overlay');

const server = new WebSocketServer({
	port: 8080,
});

const sockets = [];

server.on('connection', function connection(socket) {
	const item = {
		socket,
		lastMessage: Date.now(),
		id: uuidv1(),
	}
	sockets.push(item);

	item.lastMessage = Date.now();
	item.socket.on('message', function message(data) {
		item.lastMessage = Date.now();
		console.log('received: %s', data);
	});

	item.socket.send(JSON.stringify({
		message: "connected!",
	}));
});

const checkInMessage = JSON.stringify({
	message: "checking in",
})

setInterval(() => { // remove and ping old websockets
	const now = Date.now();
	for (let index = sockets.length - 1; index >= 0; index--) {
		const item = sockets[index];
		if (now - item.lastMessage < 20000) {
			sockets.splice(index, 1);
		} else if (now - item.lastMessage < 10000) {
			item.socket.send(checkInMessage);
		}
	}
}, 10000);