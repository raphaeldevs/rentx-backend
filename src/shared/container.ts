import { container } from "tsyringe";

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
