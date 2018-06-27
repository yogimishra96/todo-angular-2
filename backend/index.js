const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const url = 'mongodb://localhost/todo';
const todos = require('./model/todo');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.post('/api/add', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;

        var addTodo = new todos({title:req.body.title,completed:false})
        addTodo.save(function (err, addTodo) {
            if (err) return console.error(err);
            // console.log('sdf');
            res.send('s')
            // fluffy.speak();
        });

    });
})

app.get('/api/getTodos', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        todos.find(function (err, todos) {
            if (err) return console.error(err);
            res.send(todos);
        })

    });
})

app.listen(3000, () => console.log('blog server running on port 3000!'))