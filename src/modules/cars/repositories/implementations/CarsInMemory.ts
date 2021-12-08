import Car from "@modules/cars/infra/typeorm/entities/Car";

import ICarsRepository, { ICreateCarDTO } from "../ICars";

class CarsRepositoryInMemory implements ICarsRepository {
  private cars: Car[];

  constructor() {
    this.cars = [];
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
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car | undefined> {
    const car = this.cars.find((car) => car.license_plate === license_plate);

    return car;
  }

  async findAvailable(
    filters: Partial<Pick<Car, "name" | "brand" | "category_id">>
  ): Promise<Car[]> {
    let cars = this.cars.filter((car) => car.available === true);

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        cars = cars.filter((car) => car[key] === value);
      }
    });

    return cars;
  }
}

export default CarsRepositoryInMemory;
