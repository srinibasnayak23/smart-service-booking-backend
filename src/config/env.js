// config/env.js
require('dotenv').config();

const envConfig = {
  // Server
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,

  // Database
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/smart-service-booking',
  MONGODB_USER: process.env.MONGODB_USER,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,

  // JWT
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key_here',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '7d',

  // Firebase
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  FIREBASE_SERVICE_ACCOUNT_KEY: process.env.FIREBASE_SERVICE_ACCOUNT_KEY,

  // Google Maps API
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,

  // Socket.IO
  SOCKET_IO_CORS_ORIGIN: process.env.SOCKET_IO_CORS_ORIGIN || 'http://localhost:3001',

  // API
  API_VERSION: process.env.API_VERSION || 'v1',

  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
};

// Validate required environment variables
const requiredEnvVars = ['JWT_SECRET'];

requiredEnvVars.forEach((envVar) => {
  if (!envConfig[envVar] && process.env.NODE_ENV === 'production') {
    throw new Error(`Required environment variable ${envVar} is not defined`);
  }
});

module.exports = envConfig;
