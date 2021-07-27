import { inject, injectable } from "tsyringe";

import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import IUsersRepository from "../../repositories/IUsersRepository";

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
    await this.userRepository.create({
      name,
      password,
      email,
      driverLicence,
    });
  }
}

export default CreateUserUseCase;
