const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const todoSchema = new Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, required: true },
    // name: { type: String }
}, { collection : 'todos' });

const todos = mongoose.model('todos', todoSchema);

module.exports = todos;