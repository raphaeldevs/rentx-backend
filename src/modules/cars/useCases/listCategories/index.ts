import { CategoriesRepository } from "../../repositories/implementations/Category";
import ListCategoriesController from "./ListCategoriesController";
import ListCategoriesUseCase from "./ListCategoriesUseCase";

function listCategoriesController(): ListCategoriesController {
  const categoriesRepository = new CategoriesRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
  );

  return listCategoriesController;
}

export { listCategoriesController };
