import { Request, Response, NextFunction } from "express";

import UsersRepository from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";

async function ensureAdmin(
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void | Response> {
  const { id } = request.user;

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(id);

  if (!user?.isAdmin) {
    throw new AppError({
      statusCode: 403,
      message: "User isn't admin",
    });
  }

  return next();
}

export default ensureAdmin;
