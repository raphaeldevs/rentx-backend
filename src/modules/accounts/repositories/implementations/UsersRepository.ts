import { getRepository, Repository } from "typeorm";

import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import User from "../../entities/User";
import IUsersRepository from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    password,
    email,
    driverLicence,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      driverLicence,
    });

    this.repository.save(user);
  }

  findByEmail(email: string): Promise<User> {
    const user = this.repository.findOne({ email });

    return user;
  }
}

export default UsersRepository;
