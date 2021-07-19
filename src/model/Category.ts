import { v4 as uuid } from "uuid";

interface ICategoryConstrutor {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;
}

class Category {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;

  constructor({
    id = uuid(),
    name,
    description,
    createdAt = new Date(),
  }: ICategoryConstrutor) {
    Object.assign(this, { id, name, description, createdAt });
  }
}

export default Category;
