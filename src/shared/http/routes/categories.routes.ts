import { Router } from "express";
import multer from "multer";

import CreateCategoryController from "@modules/cars/useCases/createCategory/CreateCategoryController";
import ImportCategoryController from "@modules/cars/useCases/importCategory/ImportCategoryController";
import ListCategoriesController from "@modules/cars/useCases/listCategories/ListCategoriesController";
import ensureAuthenticated from "@shared/http/middlewares/ensureAuthenticated";

import ensureAdmin from "../middlewares/ensureAdmin";

const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoriesController = new ImportCategoryController();

const categoriesRoutes = Router();

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle
);

categoriesRoutes.post(
  "/import",
  ensureAuthenticated,
  ensureAdmin,
  upload.single("file"),
  importCategoriesController.handle
);

export { categoriesRoutes };
