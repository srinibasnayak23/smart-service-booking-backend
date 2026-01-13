// modules/auth/auth.routes.js
const express = require('express');
const authController = require('./auth.controller');
const { success } = require('../../utils/response.util');

const router = express.Router();

// TODO: Uncomment when middleware is ready
// router.post('/register', authController.register);
// router.post('/login', authController.login);
// router.post('/refresh-token', authController.refreshToken);
router.get('/test', (req, res) => {
    res.json(
        {
            success: true,
            message: 'Auth is working fine'
        }
    );
});

module.exports = router;
