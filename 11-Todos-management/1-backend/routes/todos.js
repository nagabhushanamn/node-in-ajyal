var express = require('express');
var router = express.Router();

let todos = [
  { id: 1, title: 'teach Node.js', completed: true },
  { id: 2, title: 'teach REST', completed: false },
  { id: 3, title: 'Teach database in next week', completed: false },
]

router
  .get('/', function (req, res, next) {
    // load all todos from database...
    res.json(todos) // JSON  ==> data-format
  })
  .get('/:id', (req, res) => {
    let id = Number.parseInt(req.params.id);
    let todo = todos.find(todo => todo.id === id)
    res.json(todo)
  })
  .delete('/:id', (req, res) => {
    console.log("deleting todo....")
    let id = Number.parseInt(req.params.id);
    let idx = todos.findIndex(todo => todo.id === id)
    todos.splice(idx, 1)
    res.json({ count: 1 })
  })
  .post("/", function (req, res) {
    const body = req.body; // json
    if (body.title) {
      let newTodo = {
        id: todos.length + 1,
        title: body.title,
        completed: false
      }
      todos.push(newTodo); // save this in databse..
      res.status(201).json(newTodo)
    }
  })
  .put("/", function (req, res) {
    const body = req.body;
    const action = body.action;
    if (action && action === "complete-all") {
      let areAllCompleted = todos.every(todo => todo.completed)
      todos.forEach(todo => { todo.completed = !areAllCompleted })
    }
    res.json({ status: 'updated' })
  })
  .put("/:id", function (req, res) {
    const body = req.body;
    const action = body.action;
    let id = Number.parseInt(req.params.id)
    let existingTodo = todos.find(todo => todo.id === id)
    if (action && action === "complete") {
      existingTodo.completed = !existingTodo.completed // toggle
    }
    else {
      existingTodo.title = body.title
    }
    res.json(existingTodo)
  })


module.exports = router;
