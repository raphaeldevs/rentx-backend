import Car from "@modules/cars/infra/typeorm/entities/Car";
import ICarsRepository, {
  ICreateCarDTO,
} from "@modules/cars/repositories/ICars";
import AppError from "@shared/errors/AppError";

class CreateCarUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({
    name,
    description,
    daily_rate,
    licence_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(
      licence_plate
    );

    if (carAlreadyExists) {
      throw new AppError({ statusCode: 409, message: "Car already exists" });
    }

    const car = await this.carsRepository.create({
      name,
      description,
      daily_rate,
      licence_plate,
      fine_amount,
      brand,
      category_id,
    });

    return car;
  }
}

export default CreateCarUseCase;
