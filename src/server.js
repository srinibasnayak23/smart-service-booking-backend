// server.js
const app = require('./app');
const http = require('http');
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');

// Connect to the database
connectDB();

const server = http.createServer(app);


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
