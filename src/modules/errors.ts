import STATUS_CODE from "./constants/http-response-status-codes";

export class CustomError extends Error {
  statusCode: number = STATUS_CODE.INTERNAL_SERVER_ERROR_500;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export class QueryParameterError extends CustomError {
  statusCode: number = STATUS_CODE.BAD_REQUEST_400;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, QueryParameterError.prototype);
  }
}

export class RequestBodyError extends CustomError {
  statusCode: number = STATUS_CODE.BAD_REQUEST_400;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, RequestBodyError.prototype);
  }
}
