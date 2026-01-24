const express = require('express');
const router = express.Router();
const {
    registerHandler,
    loginHandler,
    logoutHandler
} = require('../controllers/authController');

// Authentication routes
router.post('/register', registerHandler);
router.post('/login', loginHandler);
router.post('/logout', logoutHandler);

module.exports = router;
