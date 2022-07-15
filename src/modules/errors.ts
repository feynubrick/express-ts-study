import resStatusCode from "./constants/http-response-status-codes";

export class CustomError extends Error {
    statusCode: number = resStatusCode.INTERNAL_SERVER_ERROR;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

export class QueryParameterError extends CustomError {
    statusCode: number = resStatusCode.BAD_REQUEST;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, QueryParameterError.prototype);
    }
}

export class RequestBodyError extends CustomError {
    statusCode: number = resStatusCode.BAD_REQUEST;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, RequestBodyError.prototype);
    }
}
