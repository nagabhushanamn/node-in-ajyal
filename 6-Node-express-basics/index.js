
const express = require('express')
const app = express();

// in-memory database  
//--------------------------------------
const todos = [
    { id: 1, title: 'go to india', completed: false },
    { id: 2, title: 'come to uae', completed: false } 
]
//--------------------------------------


app.get("/", (req, res) => {
    res.send("im running..")
})
// app.post("/todos",(req,res,next)=>{next();},(req, res) => {})
app.post("/todos", express.json(), (req, res) => {
    let body = req.body;
    // server-side validation
    if (body.title === "" || body.title.length < 2) {
        res.status(400).json({ title: 'invalid title' })
    } else {
        let newTodo = {
            id: todos.length + 1,
            title: body.title,
            completed: false
        }
        todos.push(newTodo);
        res.status(201).json(newTodo)
    }
})
app.get("/todos", (req, res) => {
    res.json(todos)
})
app.get("/todos/:id", (req, res) => {
    let id = Number.parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === id);
    if (todo)
        res.json(todo)
    else
        res.status(404).json({ status: 'Not Found' })
})
app.put("/todos/:id", express.json(), (req, res) => {
    let id = Number.parseInt(req.params.id);
    let body = req.body;
    const todo = todos.find(todo => todo.id === id);
    if (todo)
        todo.title = body.title
    else
        res.status(404).json({ status: 'Not Found' })
    res.json(todo)
})
app.delete("/todos/:id", (req, res) => {
    let id = Number.parseInt(req.params.id);
    const idx = todos.findIndex(todo => todo.id === id);
    if (idx !== -1) {
        todos.splice(idx, 1)
        res.json({ status: 'deleted' })
    }
    else
        res.status(404).json({ status: 'Not Found' })
})

app.listen(3000, () => {
    console.log("im(server) listening...")
}) 