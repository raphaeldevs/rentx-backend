import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const specificationRoutes = Router();

specificationRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
