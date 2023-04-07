
class AppError extends Error {
    statusCode: number;
    status: string;
  
    constructor(messageOrError?: string | Error, statusCode?: number) {
      console.log(messageOrError);
      if (messageOrError instanceof Error) {
        // Handle case where only one argument is provided and it's an Error instance.
        super(messageOrError.message);
        this.statusCode = statusCode || 500;
      } else {
        // Handle case where two arguments are provided: a message string and a status code number.
        super(messageOrError);
        this.statusCode = statusCode || 500;
      }
  
      // Set the status based on the statusCode value.
      this.status = `${this.statusCode}`.startsWith("4")
        ? "client error"
        : "server error";
  
      // Capture the stack trace.
      Error.captureStackTrace(this);
    }
  }
  
  export default AppError;
  