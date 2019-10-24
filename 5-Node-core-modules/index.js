
const path = require('path')
const os = require('os');

const fs = require('fs')
const http = require('http')



//--------------------------------
// 'path' module : The path module provides utilities for working with file and directory paths. 
//--------------------------------


// console.log(__dirname)
// console.log(__filename)


// const pathObj=path.parse("/Users/nag/Desktop/node-in-ajyal/PPT & Notes/NPM-Recap.pdf");
// console.log(pathObj)



//--------------------------------
// 'os' module : The os module provides a number of operating system-related utility methods. It can be accessed using:
//--------------------------------

// console.log(os.platform())
// console.log(os.hostname())
// console.log(os.freemem())
// console.log(os.totalmem())
// console.log(os.cpus().length)
// console.log(os.networkInterfaces())


//------------------------------------
// fs & http 
//------------------------------------

// const file = fs.createWriteStream('./big.file');

// for (let i = 0; i <= 5e6; i++) {
//     file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
// }

// file.end()

//------------------------------------
const server = http.createServer();
server.on('request', (req, res) => {
    console.log("New Request..")
    // fs.readFile('./big.file', (err, data) => {
    //     if (err) throw err;
    //     res.end(data);
    // });

    const source = fs.createReadStream('./big.file')

    // #1 : wihtout backPressure

    // source.on('data', (chunk) => {
    //     console.log(" chunk- " + chunk.length)
    //     res.write(chunk);
    // })

    // source.on('end', () => {
    //     res.end();
    // })

    // #2  backPressure
    source.pipe(res);

});

server.listen(3000, () => {
    console.log("server up ")
});