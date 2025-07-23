// src/utils/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({
        message: err.message || 'Something went wrong!',
    });
};

module.exports = errorHandler;
