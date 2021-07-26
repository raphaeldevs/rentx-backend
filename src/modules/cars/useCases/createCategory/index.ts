import { CategoriesRepository } from "../../repositories/implementations/Category";
import CreateCategoryController from "./CreateCategoryController";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

function createCategoryController(): CreateCategoryController {
  const categoriesRepository = new CategoriesRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );

  return createCategoryController;
}

export { createCategoryController };
