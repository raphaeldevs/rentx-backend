import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import AppError from "../errors/AppError";
import UsersRepository from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void | Response> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError({
      message: "Missing authorization header",
      statusCode: 401,
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      "67a83644eef748439e7d61f8abce6068"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new AppError({ message: "User not found", statusCode: 401 });
    }

    request.user = {
      id: userId,
    };

    next();
  } catch (err) {
    throw new AppError({
      message: "Invalid token",
      statusCode: 401,
    });
  }
}

export default ensureAuthenticated;
