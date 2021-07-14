import { Request, Response, Router } from "express";
import { v4 as uuid } from "uuid";

export const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.get("/", (request: Request, response: Response) => {
  return response.json(categories);
});

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  categories.push({
    id: uuid(),
    name,
    description,
    createdAt: new Date(),
  });

  return response.sendStatus(201);
});
