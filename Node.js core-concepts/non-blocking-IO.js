

const fs = require('fs') // commonJS module standard  === import fs from 'fs;


console.log(process.pid + " started") // single-threaded process



// task-1 : IO
console.log("IO intiated....")
fs.readFile('./veg-menu.txt', (err, data) => {
    console.log("IO finised...")
    console.log(data.toString())
}) // non-blocking IO  / asynch...

// task-2 : any work..
console.log("do something else..")