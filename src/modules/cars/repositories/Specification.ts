import Specification from "../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "./ISpecification";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  list(): Specification[] {
    return this.specifications;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification({ name, description });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
}

export { SpecificationsRepository };
