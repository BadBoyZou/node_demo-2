
var net = require('net');

var client = new net.Socket();

client.connect(8080,'127.0.0.1',function (socket) {
	console.log('连接服务器成功!');

	client.write('你好','UTF8',function () {
		console.log('消息发送成功！');
	})
})
