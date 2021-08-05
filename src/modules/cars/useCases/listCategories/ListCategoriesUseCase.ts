import { inject, injectable } from "tsyringe";

import Category from "@modules/cars/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategory";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();
    return categories;
  }
}

export default ListCategoriesUseCase;
