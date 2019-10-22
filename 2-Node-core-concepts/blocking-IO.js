



const fs=require('fs') // commonJS module standard  === import fs from 'fs;


console.log(process.pid +" started") // single-threaded process



// task-1 : IO
const menu=fs.readFileSync('./veg-menu.txt') // blocking IO // 10s
console.log(menu.toString())

console.log("do something else..")
