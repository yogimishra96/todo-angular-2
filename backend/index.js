const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const url = 'mongodb://localhost/todo';
const todo = require('./model/todo');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.post('/api/add', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;

        var addTodo = new todo({title:req.body.title,completed:false})
        addTodo.save(function (err, addTodo) {
            if (err) return console.error(err);
            // console.log('sdf');
            res.send('s')
            // fluffy.speak();
        });

    });
})

app.post('/api/getTodos', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        todo.find(function (err, todo) {
            if (err) return console.error(err);
            res.send(todo);
        })

    });
})

app.listen(3000, () => console.log('blog server running on port 3000!'))