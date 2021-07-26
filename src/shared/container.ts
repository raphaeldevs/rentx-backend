import { container } from "tsyringe";

import { ICategoriesRepository } from "../modules/cars/repositories/ICategory";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/Category";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
