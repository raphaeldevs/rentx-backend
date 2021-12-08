import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAvailableFilters } from "@modules/cars/repositories/ICars";
import filterQueryBoolean from "@utils/filterQueryBoolean";

import ListAvailableCarsUseCase from "./ListAvailableCarsUseCase";

class ListAvailableCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, brand, category_id } = request.query as FindAvailableFilters;

    const filters = filterQueryBoolean<FindAvailableFilters>({
      name,
      brand,
      category_id,
    });

    const listAvailableCarsUseCase = container.resolve(
      ListAvailableCarsUseCase
    );

    const cars = await listAvailableCarsUseCase.execute(filters);

    return response.json(cars);
  }
}

export default ListAvailableCarsController;
