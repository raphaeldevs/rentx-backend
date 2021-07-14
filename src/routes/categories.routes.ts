import { Request, Response, Router } from "express";

import Category from "../model/Category";

export const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.get("/", (request: Request, response: Response) => {
  return response.json(categories);
});

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const category = new Category({ name, description });

  categories.push(category);

  return response.status(201).json(category);
});
