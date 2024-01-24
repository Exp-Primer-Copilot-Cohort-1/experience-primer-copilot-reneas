// create web server
// create a web server that can listen to requests for /hello and respond with some HTML that says <h1>Hello World!</h1>

// 1. import http module
const http = require('http');


// 2. define a port to listen to
const port = 3000;

// 3. create a server
const server = http.createServer(function(req, res) {
    // 4. listen for requests and respond
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World!</h1>');
});

// 5. start the server
server.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});

// 6. open browser and go to http://localhost:3000/


