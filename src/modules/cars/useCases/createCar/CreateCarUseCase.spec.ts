import CarsRepositoryInMemory from "@modules/cars/repositories/implementations/CarsInMemory";
import AppError from "@shared/errors/AppError";

import CreateCarUseCase from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a car", async () => {
    const car = {
      name: "Argo",
      description: "Fiat Argo",
      daily_rate: 100,
      license_plate: "HPP-1234",
      fine_amount: 50,
      brand: "Fiat",
      category_id: "5c9b9e21-054c-407a-b3a1-8044b8003773",
    };

    await createCarUseCase.execute(car);

    expect(car).toBeTruthy();
  });

  it("should not be able to create a car with existent license plate", async () => {
    expect(async () => {
      const car = {
        name: "Argo",
        description: "Fiat Argo",
        daily_rate: 100,
        license_plate: "HPP-1234",
        fine_amount: 50,
        brand: "Fiat",
        category_id: "5c9b9e21-054c-407a-b3a1-8044b8003773",
      };

      // First create a car
      await createCarUseCase.execute(car);

      // Now try to create a car with the same license plate
      await createCarUseCase.execute(car);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with available true by default", async () => {
    const car = {
      name: "Argo",
      description: "Fiat Argo",
      daily_rate: 100,
      license_plate: "HPP-1234",
      fine_amount: 50,
      brand: "Fiat",
      category_id: "5c9b9e21-054c-407a-b3a1-8044b8003773",
    };

    const createCarResult = await createCarUseCase.execute(car);

    expect(createCarResult.available).toBe(true);
  });
});
