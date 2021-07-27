import { container } from "tsyringe";

import UsersRepository from "../modules/accounts/repositories/implementations/UsersRepository";
import IUsersRepository from "../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../modules/cars/repositories/ICategory";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/Category";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/Specification";
import { ISpecificationsRepository } from "../modules/cars/repositories/ISpecification";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
