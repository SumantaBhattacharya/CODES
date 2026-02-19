class ApiError extends Error{ // class is used for declaring a blueprint
    // 1.i.custom error class specifically for API errors
    // ii. extends the built-in Error class in JavaScript, It standardizes error responses across your application.
    // iii. constructor: takes a statusCode, message, errors, stack, isOperational as arguments.
    // iii.i.  It adds additional properties like statusCode - HTTP status code (400, 404, 500, etc.), errors - Array for multiple errors, stack - Stack trace for debugging (default: empty), isOperational - If the error was caused by the client (true) or a server-side issue (false), success - Always false for errors, data - Always null for errors.
    // 2. Step 1: Call parent constructor ii. Set custom propertie iii. Handle stack trace

    // contrcutor is a special method is needed because everytime we are creating a new instance with new ApiError() class.
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "", isOperational = true){ // code="INTERNAL_ERROR",
        // 1. Call parent constructor with message
        super(message); // super is used to call the parent class constructor. super must be called before using this in derived classes
        // 2. Set custom properties
        // this.name = this.constructor.name
        // this.code = code; // stable machine code for client/logs
        this.statusCode = statusCode;// HTTP status
        this.message = message; // setting the default message.
        this.errors = errors; // data is set inside constructor - Errors typically don't have "data" to return
        this.isOperational = isOperational;
        this.success = false; // Explicitly indicates failure for API responses
        this.data = null; // No data to return on error
        // When you extend Error, you automatically get the stack property from the parent class. So we're just OVERRIDING the inherited stack
        // 3. Handle stack trace
        if (stack) {
            this.stack = stack
        }else{
            // Error is global Error object/class
            Error.captureStackTrace(this,this.constructor) // captureStackTrace (Creates a .stack property on an object) is a static (Static means you call it on the class itself, not on instances) method on the Error class.
            // i. current ApiError instance, ApiError class itself ii. this way the constructor call is removed, making the stack cleaner
        }

    }
}

// ApiError is not middleware — it’s just a class. A blueprint for creating error objects in your app.
// Express won’t automatically convert a thrown ApiError into a JSON response. errorHandler middleware catch it and translates it into a proper JSON HTTP response.
// without it Express will send generic HTML error page Not JSON response 
// In Express, a middleware with 4 arguments (err, req, res, next) is treated as an error handler.
const errorHandler = (err, req, res, next)=>{// the next argument to recognize it as an error-handling middleware. 
    // create err using ApiError
    if (err instanceof ApiError && err.isOperational) {
        // convert the html structure into json so it can be send to an response
        return res.status(err.statusCode).json({
            // overwrite
            message: err.message,
            errors: err.errors,
            success: err.success,
            data: err.data,
        })
    }else{
        console.error("💥 UNEXPECTED ERROR: ", err);

        return res.status(500).json({ // 500 indicating that the server encountered an unexpected condition that prevented it from fulfilling the request.
            // overwrite
            success: false,
            message: err.message || "Internal Server Error",
            errors: process.env.NODE_ENV === "development" ? [err.stack] : [],
        })
    }
}

// throw new ConflictError("Resource already exists"); instead of throw new ApiError(409, "Conflict", [], "", true);
class ConflictError extends ApiError {
  constructor(message = "Conflict") {
    super(409, message, [], "", true);
  }
}

/*
subclasses are convenient i.Encapsulate the default status code and message ii. Make the code more readable iii. Are easier to refactor and maintain
export class BadRequestError extends ApiError {
  constructor(message = "Bad Request") {
    super(400, message, [], "", true);
  }
};

export class UnauthorizedError extends ApiError {
  constructor(message = "Unauthorized Request") {
    super(401, message, [], "", true);
  }
};

export class NotFoundError extends ApiError {
  constructor(message = "Not Found") {
    super(404, message, [], "", true);
  }
};
*/

// In ESM (ECMAScript Modules) syntax, you must include the full file path with extension when importing local files.
// Node.js follows the official ECMAScript modules specification, which requires explicit file extensions in import paths. This is different from CommonJS (require()), which allows omitting extensions.
export {ApiError, errorHandler, ConflictError};