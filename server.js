var http = require("http");

function start() {
	function onRequest(request, response) {
		console.log("Request recieved");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello, world!");
		response.end();
	}

	http.createServer(onRequest).listen(3000);
	console.log("Server started");
}

start();

exports.start = start;


