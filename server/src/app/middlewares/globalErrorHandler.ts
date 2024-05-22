import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status"
import handleZodError from "../errors/handleZodError";
import { ZodError } from "zod";
import AppError from "../errors/appError";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {


    let statusCode = 500;
    let message = 'Something went wrong !'

    let errorDetails: any = [
        {
            path: '',
            message: 'Something went wrong'
        }
    ]

    if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err)
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorDetails = simplifiedError.errorSources

    }
    else if (err instanceof AppError) {

        statusCode = err.statusCode;
        message = err.message;
        errorDetails = {
            path: '',
            message: err.message
        }
    }
    else if (err instanceof Error) {
        message = err.message;
        errorDetails = {
            path: '',
            message: err.message
        }
    }


    return res.status(statusCode).json({
        success: false,
        message,
        errorDetails,
    })
};

export default globalErrorHandler;