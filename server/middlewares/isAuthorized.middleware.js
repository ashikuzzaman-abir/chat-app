const jwt = require('jsonwebtoken');
const config = require('../configs/main.config');

module.exports = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }
    try {
        const decoded = jwt.verify(token, config.jwt.secret);
        req.user = decoded;
        next();
    } catch (ex) {
        return res.status(400).json({
            message: 'Invalid token'
        });
    }
}