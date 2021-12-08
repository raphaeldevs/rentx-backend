import { getRepository, Repository } from "typeorm";

import ICarsRepository, {
  FindAvailableFilters,
  ICreateCarDTO,
} from "@modules/cars/repositories/ICars";

import Car from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });

    return this.repository.save(car);
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({
      license_plate,
    });

    return car;
  }

  async findAvailable(filters: FindAvailableFilters): Promise<Car[]> {
    const queryBuild = this.repository
      .createQueryBuilder("car")
      .where("car.available = true");

    Object.entries(filters).forEach(([key, value]) => {
      queryBuild.andWhere(`car.${key} = :${key}`, { [key]: value });
    });

    const cars = await queryBuild.getMany();

    return cars;
  }
}

export default CarsRepository;
