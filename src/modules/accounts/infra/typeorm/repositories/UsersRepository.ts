import { getRepository, Repository } from "typeorm";

import ICreateUserDTO from "@modules/accounts/dtos/ICreateUserDTO";

import IUsersRepository from "../../../repositories/IUsersRepository";
import User from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    id,
    avatar,
    name,
    password,
    email,
    driverLicence,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      avatar,
      name,
      password,
      email,
      driverLicence,
    });

    this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });

    return user;
  }
}

export default UsersRepository;
