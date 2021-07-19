import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/Specification";
import { CreateSpecificationService } from "../services/CreateSpecification";

const specificationRoutes = Router();

const specificationRepository = new SpecificationsRepository();

specificationRoutes.get("/", (request, response) => {
  const specifications = specificationRepository.list();

  return response.json(specifications);
});

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return response.sendStatus(201);
});

export { specificationRoutes };
