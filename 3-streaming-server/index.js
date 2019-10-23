

// Node.js ==> core modules i.e 'http' , 'fs'

const http = require('http')
const fs = require('fs')
const httpServer = http.createServer();
// request - event
httpServer.on(
    'request', (req, res) => {
    // request processing code....
    const url = req.url;
    const method = req.method;
    console.log(`${method} : ${url}`)
    if (method === "GET" && url === "/Getting-Started-Recap.pdf") {
        // readFile Event
        fs.readFile(`/Users/nag/Desktop/node-in-ajyal/PPT & Notes${url}`, (err, data) => {
            if (err) {
                res.write(err.message)
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        }) // async
    }


})

httpServer.listen(3000);   // TCP-IP  , port number range ==> 0 - 65535  , 0 - 1023, 