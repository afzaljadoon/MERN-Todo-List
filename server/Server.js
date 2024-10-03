const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes'); // Make sure the path is correct
require('dotenv').config();

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// MongoDB connection
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));  // Use .catch() to handle errors

// Routes
app.use('/api/todos', todoRoutes); // Make sure this matches the routes in todoRoutes.js

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
