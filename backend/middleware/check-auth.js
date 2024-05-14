const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[0];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = {
                    userId: decodedToken.id
            };
        next();
    } catch (error) {
        res.status(500).json({
            message: "Invalid or expired token",
            error: error
        });
    }
};

module.exports = {
    checkAuth: checkAuth
};
