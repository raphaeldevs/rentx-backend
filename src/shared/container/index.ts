import { container } from "tsyringe";

import UsersRepository from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import IUsersRepository from "@modules/accounts/repositories/IUsersRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/Category";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/Specification";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategory";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecification";

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
