const { verifyToken } = require('../utils/jwt');

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({
            message: 'Access denied. No token provided.'
        });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(403).json({
            message: 'Invalid or expired token.'
        });
    }

    // Attach user info to request
    req.user = decoded;
    next();
};

// Middleware to check session authentication
const authenticateSession = (req, res, next) => {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({
            message: 'Access denied. Please login.'
        });
    }

    req.user = {
        userId: req.session.userId,
        username: req.session.username
    };

    next();
};

module.exports = {
    authenticateToken,
    authenticateSession
};
