interface IAppErrorConstructor {
  message: string;
  statusCode: number;
}

class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor({ message, statusCode }: IAppErrorConstructor) {
    Object.assign(this, { message, statusCode: statusCode || 400 });
  }
}

export default AppError;
