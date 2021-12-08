import Car from "../infra/typeorm/entities/Car";

export interface ICreateCarDTO {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

export type FindAvailableFilters = Partial<
  Pick<Car, "name" | "brand" | "category_id">
>;

interface ICarsRepository {
  create(car: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car | undefined>;
  findAvailable(filters: FindAvailableFilters): Promise<Car[]>;
}

export default ICarsRepository;
