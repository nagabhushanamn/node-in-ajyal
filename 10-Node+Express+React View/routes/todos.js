var express = require('express');
var router = express.Router();

let todos = [
  { id: 1, title: 'go home', completed: true },
  { id: 2, title: 'go dubai', completed: false },
  { id: 3, title: 'Teach REST Api in next week', completed: false },
]

router
  .get('/', function (req, res, next) {
    // get existing todos from database or any other source
    res.render('todos-view', { todos }) // react view
  })
  .post("/", function (req, res) {
    const body = req.body;
    if (body.title) {
      let newTodo = {
        id: todos.length + 1,
        title: body.title,
        completed: false
      }
      todos.push(newTodo);
      res.redirect("/todos"); // TO VIEW ALL TODOS
    } else {
      res.render('todos-view', { todos, message: 'Title is empty' }) // react view
    }

  })


module.exports = router;
