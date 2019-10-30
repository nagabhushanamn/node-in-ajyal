const express = require('express')
// const fs = require('fs');

const app = express();

//----------------------------------------------------------------------

// app.get("/", (req, res) => {
//     // fs.readFile(__dirname + "/public/index.html", (err, data) => {
//     //     res.write(data);
//     //     res.end();
//     // })
//     // or
//     // fs.createReadStream(__dirname + "/public/index.html").pipe(res);
//     // or
//     res.sendFile(__dirname + "/public/index.html") // express utility method
// })
// app.get("/css/bootstrap.css",(req,res)=>{
//     res.sendFile(__dirname + "/public/css/bootstrap.css")
// })
// app.get("/images/pic.jpg",(req,res)=>{
//     res.sendFile(__dirname + "/public/images/pic.jpg")
// })

//----------------------------------------------------------------------

// a middleware from express.js
app.use(express.static(__dirname + "/public/")) // a middleware to serve static resources 
app.use(express.static(__dirname + "/images/")) // a middleware to serve static resources 
app.use(express.static(__dirname + "/PPT/"))

// a custom middleware for Auth
app.use((req, res, next) => {
    //..
    console.log("Auth...")
    next();
})
app.get("/todos", (req, res) => {
    //...
    res.json([
        { id: 1, title: 'item-1', completed: false },
        { id: 2, title: 'item-2', completed: false }
    ])
})

app.listen(3000, () => {
    console.log("im(server) listening");
})