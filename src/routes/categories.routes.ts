import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/Category";
import { CreateCategoryService } from "../modules/cars/services/CreateCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.list();

  return response.json(categories);
});

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.sendStatus(201);
});

export { categoriesRoutes };
