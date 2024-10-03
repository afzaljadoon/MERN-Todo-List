const express = require('express');
const { getTodos, createTodo, deleteTodo } = require('../controllers/todoController'); // Ensure this path is correct

const router = express.Router();

// Define routes
router.get('/', getTodos);  // Correctly assign the callback function
router.post('/', createTodo);  // Correctly assign the callback function
router.delete('/:id', deleteTodo);  // Correctly assign the callback function

module.exports = router;


