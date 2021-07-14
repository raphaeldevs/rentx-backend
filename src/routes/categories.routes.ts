import { Request, Response, Router } from "express";

import CategoriesRepository from "../repositories/Category";

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request: Request, response: Response) => {
  const categories = categoriesRepository.list();

  return response.json(categories);
});

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(409).json({
      error: "Category already exists",
    });
  }

  categoriesRepository.create({ name, description });

  return response.sendStatus(201);
});
