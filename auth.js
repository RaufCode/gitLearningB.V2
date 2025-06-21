const jwt = require('jsonwebtoken');

/**
 * auth.js
 * Basic authentication utilities
 */


const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

/**
 * Generate JWT token for a user
 * @param {Object} user - User object
 * @returns {string} JWT token
 */
function generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
        expiresIn: '1h',
    });
}

/**
 * Middleware to verify JWT token
 */
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = {
    generateToken,
    authenticateToken,
};