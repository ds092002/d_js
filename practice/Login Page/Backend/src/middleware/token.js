const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');
const JWT_SECRET = process.env.JWT_SECRET;

exports.verifyToken = async (req, res, next) => {
    try {
        const authorization = req.headers['authorization'];

        if (!authorization || !authorization.startsWith('Bearer ')) {
            return res.status(401).json({
                status: 401,
                message: 'Authorization token not found or invalid format',
                data: {}
            });
        }
        
        const token = authorization.split(' ')[1];

        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            return res.status(401).json({
                status: 401,
                message: 'Unauthorized user',
                data: {}
            });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error(error);
        return res.status(401).json({
            status: 401,
            message: 'Invalid or expired token',
            data: {}
        });
    }
};
