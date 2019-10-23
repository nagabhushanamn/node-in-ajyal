console.log('-index.js-')


const fs = require('fs')  // node's core module i.e it is node.js instalation directory
const greet = require('ajyal-oct-greet/greet') // node_modules i.e we got via 'npm i' command
const lodash = require('lodash')
const calc = require('./arith/calc') // modules in current_directory

greet.greet('ar')
greet.greet('en')
greet.greet('es')
greet.greet()

console.log(calc.add(12, 13))

console.log(lodash.difference([1, 2], [1, 3]))