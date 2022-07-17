import { Request, Response, NextFunction } from "express";
import { CustomError } from "../modules/errors";
import STATUS_CODES from "../modules/constants/http-response-status-codes";

export default function (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode = STATUS_CODES.INTERNAL_SERVER_ERROR_500;
  if (err instanceof CustomError) {
    statusCode = err.statusCode;
  }

  res.status(statusCode).send(err.message);
}
