const http = require('http');

// create web server
const server = http.createServer((req, res) => {
    // handle requests here
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
