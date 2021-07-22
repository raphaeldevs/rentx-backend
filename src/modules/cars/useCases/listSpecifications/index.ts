import { SpecificationsRepository } from "../../repositories/implementations/Specification";
import ListSpecificationController from "./ListSpecificationsController";
import ListSpecificationUseCase from "./ListSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationUseCase(
  specificationsRepository
);
const listSpecificationsController = new ListSpecificationController(
  listSpecificationsUseCase
);

export { listSpecificationsController };
