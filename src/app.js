// app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const moduleRoutes = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is running' 
    });
});

// API Routes
app.use('/api/v1', moduleRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl,
  });
});

// Centralized error handler (must be last)
app.use(errorMiddleware);

module.exports = app;
