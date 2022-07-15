// Successful responses
export const OK: 200 = 200;
export const CREATED: 201 = 201;

// Client error responses
export const BAD_REQUEST: 400 = 400;
export const UNAUTHORIZED: 401 = 401;
export const FORBIDDEN: 403 = 403;
export const NOT_FOUND: 404 = 404;
export const CONFLICT: 409 = 409;

// Server error responses
export const INTERNAL_SERVER_ERROR: 500 = 500;

export default {
    OK,
    CREATED,
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    CONFLICT,
    INTERNAL_SERVER_ERROR,
};