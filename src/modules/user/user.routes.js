// modules/user/user.routes.js
const express = require('express');
const userController = require('./user.controller');

const router = express.Router();

// TODO: Uncomment when auth middleware is ready
// router.get('/:id', authMiddleware, userController.getUserById);
// router.put('/:id', authMiddleware, userController.updateUser);
// router.delete('/:id', authMiddleware, userController.deleteUser);
// router.get('/', authMiddleware, userController.getAllUsers);
// router.put('/:id/location', authMiddleware, userController.updateLocation);

module.exports = router;
