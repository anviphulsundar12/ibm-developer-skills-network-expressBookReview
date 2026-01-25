const {
    registerUser,
    findUserByUsername,
    validatePassword
} = require('../models/users');
const { generateToken } = require('../utils/jwt');
const {
    validateEmail,
    validatePassword: validatePasswordStrength,
    validateUsername
} = require('../utils/validators');

// Register a new user
const registerHandler = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // Validate input
        if (!username || !password || !email) {
            return res.status(400).json({
                success: false,
                message: 'Username, password, and email are required'
            });
        }

        if (!validateUsername(username)) {
            return res.status(400).json({
                success: false,
                message: 'Username must be 3-20 alphanumeric characters'
            });
        }

        if (!validatePasswordStrength(password)) {
            return res.status(400).json({
                success: false,
                message: 'Password must be at least 6 characters long'
            });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format'
            });
        }

        // Register user
        const user = await registerUser(username, password, email);

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Login user
const loginHandler = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate input
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: 'Username and password are required'
            });
        }

        // Find user
        const user = await findUserByUsername(username);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid username or password'
            });
        }

        // Validate password
        const isValidPassword = await validatePassword(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({
                success: false,
                message: 'Invalid username or password'
            });
        }

        // Generate JWT token
        const token = generateToken({
            userId: user.userId,
            username: user.username
        });

        // Create session
        req.session.userId = user.userId;
        req.session.username = user.username;

        res.status(200).json({
            success: true,
            message: 'Login successful!',
            data: {
                userId: user.userId,
                username: user.username,
                token,
                sessionId: req.sessionID
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error during login',
            error: error.message
        });
    }
};

// Logout user
const logoutHandler = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Error during logout'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Logout successful'
        });
    });
};

module.exports = {
    registerHandler,
    loginHandler,
    logoutHandler
};
