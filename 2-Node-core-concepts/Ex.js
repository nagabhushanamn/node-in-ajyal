
const fs = require('fs')
const now = require("performance-now")


// read both veg & non-veg menu.txt files in Node.js & display in console

//-------------------------------------------
// #1 blocking  / sync IO
//-------------------------------------------

// const start = now();

// // step-1 : 
// console.log('intiating IO on veg.txt')
// const vegMenu = fs.readFileSync('./veg-menu.txt');  // Node-process ==> OS  ==> disk 
// console.log('after IO on veg.txt')
// console.log(vegMenu.toString())

// // step-2 : 40ms
// console.log('intiating IO on non-veg.txt')
// const nonVegMenu = fs.readFileSync('./non-veg-menu.txt');  // Node-process ==> OS  ==> disk 
// console.log('after IO on non-veg.txt')
// console.log(nonVegMenu.toString())

// const end = now();

// console.log(end - start)

//-------------------------------------------
// #2 non-blocking / async IO  ( recommended )
//-------------------------------------------

const start = now();

// step-1 : 100ms
console.log('intiating IO on veg.txt')
fs.readFile('./veg-menu.txt', (err, data) => {
    if (err) throw err;
    console.log('after IO on veg.txt')
    console.log(data.toString())
});  // Node-process ==> OS  ==> disk 

// // step-2 : 40ms
console.log('intiating IO on non-veg.txt')
fs.readFile('./non-veg-menu.txt', (err, data) => {
    if (err) throw err;
    console.log('after IO on non-veg.txt')
    console.log(data.toString())
});  // Node-process ==> OS  ==> disk 

const end = now();

console.log(end-start)