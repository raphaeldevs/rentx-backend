import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateUserUseCase from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password, email, driverlicense } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      password,
      email,
      driverlicense,
    });

    return response.sendStatus(201);
  }
}

export default CreateUserController;
