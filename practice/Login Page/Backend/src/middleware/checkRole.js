module.exports = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    }else {
        return res.status(403).json({
            status: 403,
            message: 'Access denied. Admins only.',
            data: {}
        });
    }
};