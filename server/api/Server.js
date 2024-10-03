const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes'); // Make sure the path is correct
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// Routes
app.use('/api/todos', todoRoutes); // This matches the routes in todoRoutes.js

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
