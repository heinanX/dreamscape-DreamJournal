import { Request, Response, NextFunction } from "express";

class AppError extends Error {
    status: number;
  
    constructor(message: string, status: number) {
      super(message);
      this.status = status;
    }
  }

// Handle 404 Not Found errors
const notFound = (req: Request, res: Response) => {
    res.status(404).json("Not found");
};
  
  // Error handler for other types of errors
  const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
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
  }