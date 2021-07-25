import { v4 as uuid } from "uuid";

interface ISpecificationConstrutor {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;
}

class Specification {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;

  constructor({
    id = uuid(),
    name,
    description,
    createdAt = new Date(),
  }: ISpecificationConstrutor) {
    Object.assign(this, { id, name, description, createdAt });
  }
}

export default Specification;
