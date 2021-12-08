import { inject, injectable } from "tsyringe";

import Car from "@modules/cars/infra/typeorm/entities/Car";
import ICarsRepository, {
  FindAvailableFilters,
} from "@modules/cars/repositories/ICars";

@injectable()
class listAvailableCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute(filters: FindAvailableFilters = {}): Promise<Car[]> {
    return this.carsRepository.findAvailable(filters);
  }
}

export default listAvailableCarsUseCase;
