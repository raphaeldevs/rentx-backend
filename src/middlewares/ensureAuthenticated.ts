import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

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
    throw new Error("No authorization header");
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
      throw new Error("User not found");
    }

    next();
  } catch (err) {
    throw new Error("Invalid token");
  }
}

export default ensureAuthenticated;
