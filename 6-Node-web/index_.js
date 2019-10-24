

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    let url = req.url;
    let method = req.method;
    if (method === "GET" && url === "/") {
        res.end("welcome")
    }
    if (method === "GET" && url === "/items") {
        let items = [1, 2, 3, 4]
        res.writeHead(200, { 'Content-Type': "application/json" })
        res.write(JSON.stringify(items))
        res.end()
    }
})


server.listen(3000, () => {
    console.log("im(server) listening...")
})