import Category from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategory";

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();
    return categories;
  }
}

export default ListCategoriesUseCase;
