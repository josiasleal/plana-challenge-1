const http = require('http') //using http package to build our simple webserver
const os = require('os') // using os package to retrieve the hostname
const visitor_ip = require('ip') // using ip package to get the visitor's ip address

const server = http.createServer(function (req, res) {   
   
    if (req.url == '/') { //check the URL of the current request
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({
                timestamp: new Date(),
                hostname: os.hostname(),
                engine: process.version,
                visitor_ip: visitor_ip.address()
              }));  
            res.end();  
    }
});

server.listen(5000);

console.log('Awesome webserver running at port 5000...')