const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello world node app');
});

server.listen(3000); 