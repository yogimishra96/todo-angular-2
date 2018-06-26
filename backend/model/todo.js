const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const todoSchema = new Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, required: true },
    // name: { type: String }
}, { collection : 'todo' });

const todo = mongoose.model('todo', todoSchema);

module.exports = todo;