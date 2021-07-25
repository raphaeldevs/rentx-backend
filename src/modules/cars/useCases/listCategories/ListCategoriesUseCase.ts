import Category from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategory";

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.categoryRepository.list();
  }
}

export default ListCategoriesUseCase;
