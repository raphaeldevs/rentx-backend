import { Request, Response, Router } from "express";

import Category from "../model/Category";
import CategoriesRepository from "../repositories/Category";

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

const categories: Category[] = [];

categoriesRoutes.get("/", (request: Request, response: Response) => {
  return response.json(categories);
});

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.sendStatus(201);
});
