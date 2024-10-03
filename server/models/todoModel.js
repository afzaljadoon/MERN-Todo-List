const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true  // Description is expected, as per your controller
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
