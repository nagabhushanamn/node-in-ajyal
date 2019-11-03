var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override')

var todosRouter = require('./routes/todos');

var app = express();

app.use(methodOverride('_method'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use("/todos", todosRouter)


// error handler
app.use(function (err, req, res, next) {
  res.json(err);
});

module.exports = app;
