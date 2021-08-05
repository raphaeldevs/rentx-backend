import { Request, Response } from "express";
import { container } from "tsyringe";

import UpdateUserAvatarUseCase from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;

    const avatarFile = request.file.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUseCase.execute({
      userId,
      avatarFile,
    });

    return response.sendStatus(204);
  }
}

export default UpdateUserAvatarController;
