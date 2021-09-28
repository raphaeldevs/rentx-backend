import { container } from "tsyringe";

import UsersRepository from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import IUsersRepository from "@modules/accounts/repositories/IUsersRepository";
import CarsRepository from "@modules/cars/infra/typeorm/repositories/Car";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/Category";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/Specification";
import ICarsRepository from "@modules/cars/repositories/ICars";
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

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
