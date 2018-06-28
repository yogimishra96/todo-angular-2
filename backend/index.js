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
            if (err) return res.send(err);

            res.json({statusCode : 200,  message: 'todo added!' });
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

    app.put('/api/updateTodo',function(req, res) {
        // use our bear model to find the bear we want

        mongoose.connect(url, function(err){
            todos.findById(req.body.id, function(err, todos) {
                if (err) {
                    res.send(err);
                }

                // res.send('fdfdfdf');

                todos.completed = req.body.completed;  // update the bears info
                // save the bear
                todos.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Bear updated!' });
                });

            });
        });


    });

app.listen(3000, () => console.log('blog server running on port 3000!'))








