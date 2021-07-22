import csvParse from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/ICategory";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();

      const categories: IImportCategory[] = [];

      stream.pipe(parseFile);

      parseFile
        .on("data", (row: string) => {
          const [name, description] = row;

          categories.push({ name, description });
        })
        .on("end", () => resolve(categories))
        .on("error", (error) => reject(error));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.forEach((category) => {
      const { name, description } = category;
      const categoryAlreadyExists = this.categoryRepository.findByName(name);

      if (categoryAlreadyExists) {
        throw new Error("Category already exists");
      }

      this.categoryRepository.create({ name, description });
    });
  }
}

export default ImportCategoryUseCase;
