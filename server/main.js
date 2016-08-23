
var net  = require('net');

var server = new net.Server();

server.on('connection',function (socket) {
		console.log('connection 事件:'+socket);

		socket.on('data',function (data) {
			console.log(data.toString());
		})
})

server.on('error',function (err) {
	console.log(err);
})

server.on('listening',function (socket) {
	console.log('listening 事件:'+socket);
})

server.listen(8080,'127.0.0.1',100,function (socket) {
	console.log('监听成功')
})