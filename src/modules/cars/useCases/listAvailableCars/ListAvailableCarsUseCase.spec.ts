import CarsRepositoryInMemory from "@modules/cars/repositories/implementations/CarsInMemory";

import ListAvailableCarsUseCase from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeAll(() => {
    carsRepository = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepository);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepository.create({
      name: "Argo",
      description: "Fiat Argo",
      daily_rate: 100,
      license_plate: "HPP-1234",
      fine_amount: 50,
      brand: "Fiat",
      category_id: "cb669c3f-3158-4feb-88f6-930d927fb93a",
    });

    const cars = await listAvailableCarsUseCase.execute();

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepository.create({
      name: "Civic",
      description: "Honda Civic",
      daily_rate: 150,
      license_plate: "VKS-1234",
      fine_amount: 100,
      brand: "Honda",
      category_id: "12d5599a-f228-40b0-95e7-4377c8cdf161",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Civic",
    });

    expect(cars).toEqual([car]);
  });
});
