// utils/jwt.util.js
const jwt = require('jsonwebtoken');

const jwtUtil = {
  generateToken: (userId, email, role) => {
    return jwt.sign(
      { id: userId, email, role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );
  },

  generateRefreshToken: (userId) => {
    return jwt.sign(
      { id: userId },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );
  },

  verifyToken: (token) => {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  },

  decodeToken: (token) => {
    return jwt.decode(token);
  },
};

module.exports = jwtUtil;
