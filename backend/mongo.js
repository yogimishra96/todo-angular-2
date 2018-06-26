var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/todo';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const todo_model = mongoose.model('Todo', { title: String ,complete : Boolean});
let addTodo = (title) => {
    const todo_schema = new todo_model({ title: title,complete: false});
    todo_schema.save();
}

// var ListTodos ;

module.exports.ListTodos = () => {
    todo_model.find(function (err, kitty) {
        // console.log('error', err);
        return kitty;
    })
    // return true;

};
