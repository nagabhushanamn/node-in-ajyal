var express = require('express');
var router = express.Router();

let todos = [
  { id: 1, title: 'go home', completed: 'true' },
  { id: 2, title: 'go dubai', completed: 'false' },
]

router.get('/', function (req, res, next) {
  // get existing todos from database or any other source
  res.render('todos-view', { todos }) // react view
});

module.exports = router;
