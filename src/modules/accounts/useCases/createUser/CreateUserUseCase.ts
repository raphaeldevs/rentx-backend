import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import AppError from "@errors/AppError";
import ICreateUserDTO from "@modules/accounts/dtos/ICreateUserDTO";
import IUsersRepository from "@modules/accounts/repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({
    name,
    password,
    email,
    driverLicence,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError({ message: "User already exists", statusCode: 409 });
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      password: passwordHash,
      email,
      driverLicence,
    });
  }
}

export default CreateUserUseCase;
