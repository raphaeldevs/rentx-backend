import { v4 as uuid } from "uuid";

interface ICategoryConstrutor {
  name: string;
  description: string;
}

class Category {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;

  constructor({ name, description }: ICategoryConstrutor) {
    if (!this.id) {
      this.id = uuid();
    }

    if (!this.createdAt) {
      this.createdAt = new Date();
    }

    Object.assign(this, { name, description });
  }
}

export default Category;
