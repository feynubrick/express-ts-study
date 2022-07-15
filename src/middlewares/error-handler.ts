import { Request, Response, NextFunction } from "express";
import { CustomError } from "../modules/errors";

export default function(err: Error, req: Request, res: Response, next: NextFunction) {
    let statusCode: number = 500;
    if (err instanceof CustomError) {
        statusCode = err.statusCode;
    }

    res.status(statusCode).send(err.message);
};