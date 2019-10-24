

const express = require('express')
const app = express();
// in-memory database  
//--------------------------------------
const todos = []
//--------------------------------------
app.get("/", (req, res) => {
    res.send("im running..")
})
app.post("/todos", express.json(), (req, res) => {
    let body = req.body;
    let newTodo = {
        id: todos.length + 1,
        title: body.title,
        completed: false
    }
    todos.push(newTodo);
    res.json(newTodo)
})

app.get("/todos",(req,res)=>{
    res.json(todos)
})

app.listen(3000, () => {
    console.log("im(server) listening...")
})