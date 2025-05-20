// errors/BaseError.ts
export class BaseError extends Error {
  statusCode: number;
  details?: unknown;

  constructor(message: string, statusCode = 500, details?: unknown) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NetworkError extends BaseError {
  constructor(message = "Network error", details?: unknown) {
    super(message, 503, details);
  }
}

export class AuthError extends BaseError {
  constructor(message = "Authentication error", details?: unknown) {
    super(message, 401, details);
  }
}
