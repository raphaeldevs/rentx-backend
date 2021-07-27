import { Router } from "express";
import multer from "multer";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import CreateCategoryController from "../modules/cars/useCases/createCategory/CreateCategoryController";
import ImportCategoryController from "../modules/cars/useCases/importCategory/ImportCategoryController";
import ListCategoriesController from "../modules/cars/useCases/listCategories/ListCategoriesController";

const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoriesController = new ImportCategoryController();

const categoriesRoutes = Router();

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  createCategoryController.handle
);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoriesController.handle
);

export { categoriesRoutes };
