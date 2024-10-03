const express = require('express');
const { getTodos, createTodo, deleteTodo } = require('../controllers/todoController'); // Ensure this path is correct

const router = express.Router();

// Define routes
router.get('/', getTodos);  // Route to get all todos
router.post('/', createTodo);  // Route to create a new todo
router.delete('/:id', deleteTodo);  // Route to delete a todo by ID

module.exports = router;
