"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
// Handle 404 Not Found errors
const notFound = (req, res) => {
    res.status(404).json("Not found");
};
// Error handler for other types of errors
const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const response = {
        error: true,
        status,
        message: err.message,
        // Include more details if needed
    };
    // Log the error
    console.error(err);
    res.status(status).json(response);
};
